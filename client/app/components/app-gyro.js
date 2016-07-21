import Ember from 'ember';

const {
  computed,
  inject
} = Ember;

let STEPS = 1;

export default Ember.Component.extend({
  measurements: null,

  gyro: inject.service('gyro'),

  initGyro: Ember.on('didInsertElement', function () {
    this.get('gyro').startTracking((measurements) => {
      this.set('measurements', measurements);
    });
  }),

  destroyGyro: Ember.on('willDestroyElement', function () {
    this.get('gyro').stopTracking();
  }),

  tiltLeftRight: computed('gyro.tiltLeftRight', function () {
    return Math.abs(this.get('gyro.tiltLeftRight'));
  }),

  tiltFrontBack: computed('gyro.tiltFrontBack', function () {
    return Math.abs(this.get('gyro.tiltFrontBack'));
  }),

  touchLeftRight: computed.gte('tiltLeftRight', 45),
  touchFrontBack: computed.gte('tiltFrontBack', 30),

  steps: computed('touchLeftRight', 'touchFrontBack', function () {
    Ember.run.debounce(this, () => {
      if (this.get('touchLeftRight') && this.get('touchFrontBack')) {
        STEPS = STEPS + 1;
      }
    }, 1500);

    return STEPS;
  }),

  actions: {
    stopTracking() {
      this.get('gyro').stopTracking();
    }
  }
});

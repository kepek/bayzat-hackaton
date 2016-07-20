import Ember from 'ember';

const {
  computed,
  inject
} = Ember;

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

  steps: computed('measurements.{x,y,z}', 'gyro.gravity', function () {
    let steps = 0;
    let m = this.get('measurements');

    if (m) {
      steps = Math.sqrt(m.x * m.x + m.y * m.y + m.z * m.z);
    }

    return steps;
  }),

  actions: {
    stopTracking() {
      this.get('gyro').stopTracking();
    }
  }
});

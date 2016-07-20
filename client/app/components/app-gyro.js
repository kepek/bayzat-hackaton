import Ember from 'ember';

const {
  computed,
  inject
} = Ember;

export default Ember.Component.extend({
  measurements: null,

  gyro: inject.service('gyro'),

  init() {
    this._super(...arguments);

    this.get('gyro').startTracking((measurements) => {
      this.set('measurements', measurements);
    });
  },

  steps: computed('measurements', function () {
    let m = this.get('measurements');
    let steps = 0;

    if (m) {
      let stepLength = Math.sqrt(m.x * m.x + m.y * m.y + m.z * m.z);

      if(stepLength>= 2){
       steps+=1;
      }
    }
 
    return steps;
  })
});

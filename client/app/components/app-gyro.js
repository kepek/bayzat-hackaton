/* global gyro */

import Ember from 'ember';

export default Ember.Component.extend({
  initGyro: Ember.on('didInsertElement', function () {
    Ember.assert('Gyroscope is not available', gyro);

    gyro.startTracking(function(o) {
        // o.x, o.y, o.z for accelerometer
        // o.alpha, o.beta, o.gamma for gyro
        console.log('gyro', o);
    });
  })
});

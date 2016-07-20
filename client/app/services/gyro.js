import Ember from 'ember';

export default Ember.Service.extend({
  measurements: {
    x: null,
    y: null,
    z: null,
    alpha: null,
    beta: null,
    gamma: null
  },

  calibration: {
    x: 0,
    y: 0,
    z: 0,
    alpha: 0,
    beta: 0,
    gamma: 0
  },

  interval: null,
  features: null,
  frequency: 500, //ms

  init() {
    this._super(...arguments);

    this.set('features', []);

    Ember.run.schedule('afterRender', this, function () {
      if (window && window.addEventListener) {
        window.addEventListener('MozOrientation', (e) => {
          this.get('features').push('MozOrientation');
          this.set('measurements.x', e.x - this.get('calibration.x'));
          this.set('measurements.y', e.y - this.get('calibration.y'));
          this.set('measurements.z', e.z - this.get('calibration.z'));
        }, true);

        window.addEventListener('devicemotion', (e) => {
          this.get('features').push('devicemotion');
          this.set('measurements.x', e.accelerationIncludingGravity.x - this.get('calibration.x'));
          this.set('measurements.y', e.accelerationIncludingGravity.y - this.get('calibration.y'));
          this.set('measurements.z', e.accelerationIncludingGravity.z - this.get('calibration.z'));
        }, true);

        window.addEventListener('deviceorientation', (e) => {
          this.get('features').push('deviceorientation');
          this.set('measurements.alpha', e.alpha - this.get('calibration.alpha'));
          this.set('measurements.beta', e.beta - this.get('calibration.beta'));
          this.set('measurements.gamma', e.gamma - this.get('calibration.gamma'));
        }, true);

      }
    });
  },

  calibrate() {
    let measurements = this.get('measurements');

  	for (let i in measurements) {
  		this.set(`calibration.${i}`, (typeof measurements[i] === 'number') ? measurements[i] : 0);
  	}
  },

  getOrientation() {
  	return this.get('measurements');
  },

  startTracking(callback) {
    let measurements = this.get('measurements');
    let frequency = this.get('frequency');

  	this.set('interval', setInterval(() => {
  		callback(measurements);
  	}, frequency));
  },

  stopTracking() {
    let interval = this.get('interval');

  	clearInterval(interval);
  },

  hasFeature(feature) {
    let features = this.get('features');

  	for (let i in features) {
  		if (feature === features[i]) {
  			return true;
  		}
  	}

  	return false;
  },

  getFeatures() {
  	return this.get('features');
  }
});

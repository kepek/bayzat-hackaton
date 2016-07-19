import Ember from 'ember';

let TODAY = new Date();
let YESTERDAY = new Date(TODAY).setDate(TODAY.getDate() - 1);

TODAY = TODAY.getTime();

export default Ember.Route.extend({
  model() {
      return {
        todayDate: TODAY,
        yesterdayDate: YESTERDAY
      };
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties(model);
  }
});

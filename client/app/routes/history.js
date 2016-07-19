import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    date: {
      refreshModel: true
    }
  },

  model() {
    return Ember.RSVP.hash({
      history: [
        {
          id: 2, date: 1468844350084, steps: 4221
        },
        {
          id: 1, date: 1468930750084, steps: 7942
        }
      ]
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties(model);
  }
});

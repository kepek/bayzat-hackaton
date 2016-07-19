import Ember from 'ember';
import Framework7Initializer from 'bayzat-hackaton/initializers/framework7';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | framework7', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  Framework7Initializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

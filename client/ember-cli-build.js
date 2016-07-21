/* jshint node:true */
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = EmberApp.env();
var path = require('path');

var THEME = 'ios'; // ['material', 'ios']

// List of extensions for fingerprint
var fingerprintExtensions = [
    'js', 'css', 'png', 'jpg', 'ico', 'gif', 'svg', 'map', 'mp4', 'ttf', 'pdf',
    'eot', 'woff', 'woff2', 'mp3', 'wav', 'wmv', '3gp', 'mpg', 'swf', 'avi', 'tif'
];

// Config
var config = function () {
  var APP = {};

  if (env === 'production') {
    APP.storeConfigInMeta = false;
    APP.fingerprint = {
      enabled: true,
      extensions: fingerprintExtensions,
      // prepend: '/ember/sir/',
      generateAssetMap: true,
      generateRailsManifest: true,
      exclude: [
        'manifest.json',
        'img/layers-2x.png',
        'img/layers.png',
        'img/marker-icon-2x.png',
        'img/marker-icon.png',
        'img/marker-shadow.png',
        'fonts/fontawesome-webfont.eot',
        'fonts/fontawesome-webfont.svg',
        'fonts/fontawesome-webfont.ttf',
        'fonts/fontawesome-webfont.woff',
        'fonts/fontawesome-webfont.woff2'
      ]
    };
  }

  return APP;
};

module.exports = function(defaults) {
  var app = new EmberApp(defaults, config());

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import(path.join(app.bowerDirectory, '/framework7/dist/css/framework7.' + THEME + '.css'));
  app.import(path.join(app.bowerDirectory, '/framework7/dist/css/framework7.' + THEME + '.colors.css'));
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-f7-ios.png'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-f7-material.png'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-calendar-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-calendar-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-comment-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-comment-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-email-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-email-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-gender-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-gender-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-name-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-name-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-password-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-password-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-settings-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-settings-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-tel-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-tel-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-toggle-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-toggle-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-url-ios.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/img/i-form-url-material.svg'), { destDir: '/img' });
  app.import(path.join(app.bowerDirectory, '/framework7/dist/js/framework7.min.js'));
  app.import(path.join(app.bowerDirectory, '/framework7/dist/js/framework7.min.js.map'), {
    destDir: 'assets'
  });

  return app.toTree();
};

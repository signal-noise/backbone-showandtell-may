require.config({
	paths: {
		"jquery": "lib/jquery/dist/jquery.min",
		"underscore": "lib/underscore/underscore-min",
		"backbone": "lib/backbone/backbone",
		"backbone-super": "lib/backbone-super/backbone-super/backbone-super-min",
    "text": "lib/requirejs-text/text",
    "velocity": "lib/velocity/velocity",
    "velocity-ui": "lib/velocity/velocity.ui.min",
    "svg": 'lib/svg.js/dist/svg.min',
	},
	shim: {
		"underscore": { exports: "_" },
		"jquery": { exports: "$" },
		"backbone": { exports: "Backbone", deps: ["underscore", "jquery"] },
		"velocity": { deps: ["jquery"] },
		"velocity-ui": { deps: ["velocity"] },
	}
});

requirejs([
  // Libs
  'jquery',
  'underscore',
  'backbone',
  'backbone-super',
  'velocity',
  'velocity-ui',
  'slides/bbpa/bbpa'
], function($, _, Backbone){



});
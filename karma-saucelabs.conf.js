var commonConfig = require('./karma.conf.js');

var customLaunchers = {
	sl_chrome: {
		base: 'SauceLabs',
		browserName: 'chrome',
		platform: 'Windows 7',
		version: '52',
	},
	sl_firefox: {
		base: 'SauceLabs',
		browserName: 'firefox',
		version: '45',
	},
	sl_ie_11: {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		platform: 'Windows 8.1',
		version: '11',
	},
	sl_ios_safari: {
		base: 'SauceLabs',
		browserName: 'safari',
		platform: 'OS X 10.11',
		version: '9.0',
	},
	sl_ios_safari: {
		base: 'SauceLabs',
		browserName: 'safari',
		platform: 'OS X 10.11',
		version: '10.0',
	},
	sl_edge: {
		base: 'SauceLabs',
		browserName: 'microsoftedge',
		platform: 'Windows 10',
	},
};


module.exports = function(config) {
	commonConfig(config);

	config.set({
		sauceLabs: {
			testName: "single-spa tests",
			// username: 'joeldenning',
			// accessKey: 'access-key'
		},

		customLaunchers: customLaunchers,

		singleRun: true,

		reporters: ['progress', 'dots', 'saucelabs'],

		browsers: Object.keys(customLaunchers),
	});
}

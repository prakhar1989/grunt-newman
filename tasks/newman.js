'use strict';

var Newman = require('newman'),
	request = require('unirest');

module.exports = function (grunt) {
	grunt.registerMultiTask('newman', 'Run Newman', function () {
		var options = this.options();

		var done = this.async();

		request.get(options.url).type('json').end(function(data) {
			if (data.error) {
				grunt.fail.fatal('Unable to fetch a valid response. Error: ' + data.code);
			}
			Newman.execute(data.body, options, function() {
				done(); // we should add a callback on newman
			});
		});
	});
};

'use strict';

var Newman = require('newman'),
	request = require('unirest'),
	fs = require('fs'),
	JSON5 = require('json5'),
	_und = require('lodash');

module.exports = function (grunt) {
	grunt.registerMultiTask('newman', 'Run Newman', function () {

		var options = this.options();

		var done = this.async();

		if (options.collection) {
			var requestJSON = JSON5.parse(fs.readFileSync(options.collection, 'utf8'));

			Newman.execute(requestJSON, options, function() {
				done(); // we should add a callback on newman
			});

		} else {
			request.get(options.url).type('json').end(function(data) {
				if (data.error) {
					grunt.fail.fatal('Unable to fetch a valid response. Error: ' + data.code);
				}
				Newman.execute(data.body, options, function() {
					done(); // we should add a callback on newman
				});
			});
		}
	});
};

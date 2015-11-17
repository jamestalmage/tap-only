'use strict';

var slice = Array.prototype.slice;
var tap = require('tap');
var exclusive = false;
var started = false;
var tests = [];

function test() {
	if (!exclusive) {
		tests.push(slice.call(arguments));
	}
}

function only() {
	if (started) {
		throw new Error('you can not call `only()` async without disableAutoStart()');
	}
	if (!exclusive) {
		exclusive = true;
		tests = [];
	}
	tests.push(slice.call(arguments));
}

function start() {
	if (started) {
		throw new Error('already started. Can\'t start again');
	}
	tests.forEach(function (args) {
		tap.test.apply(tap, args);
	});
}

var timeout = setTimeout(start);

function disableAutoStart() {
	if (started) {
		throw new Error('already started. It is to late to disable');
	}
	clearTimeout(timeout);
}

module.exports = test;
module.exports.only = only;
module.exports.start = start;
module.exports.disableAutoStart = disableAutoStart;

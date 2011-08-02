var mysql = require('..');
var path = require('path');

var root = path.join(__dirname, '../');
exports.dir = {
  root: root,
  lib: root + '/lib',
};

exports.createClient = function() {
  try {
    var config = require('./config');
  } catch (e) {
    console.log('Skipping. See test/config.template.js for more information.');
    process.exit(0);
  }

  return mysql.createClient(config);
};

exports.fastOrSlow = require('fast-or-slow');

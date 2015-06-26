/*
  Simple Node.js script that reads variables from the bootstrap config file
  and writes them to _bootstrap-vars.less so that the same variables can be used from
  custom LESS code.
*/
var fs = require('fs');
var bootstrapConfig = require("./public/styles/config.json");

var stream = fs.createWriteStream("./public/styles/_bootstrap-vars.less");
stream.once('open', function(fd) {
  for (var prop in bootstrapConfig.vars) {
    if (bootstrapConfig.vars.hasOwnProperty(prop)) {
      stream.write(prop + ': ' + bootstrapConfig.vars[prop] + ';\r\n');
    }
  }
  stream.end();
});

console.log("The file ./public/styles/_bootstrap-vars.less updated!");

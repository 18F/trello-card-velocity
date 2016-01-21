var assert = require('assert');
var app = require('../index');
var fs = require('fs');
var sepia = require('sepia');
var path = require('path');

sepia.fixtureDir(path.join(process.cwd(), 'tests/fixtures/generated'));

var configFile = JSON.parse(fs.readFileSync('config.json', 'utf-8'));
var testFile = fs.readFileSync('tests/testData.json', 'utf-8');

describe('start function loads', function() {
  describe('start()', function () {
    it('should return an error when config is not present', function () {
      assert.throws(app.loadConfig, Error, "Error: Something went wrong in parsing the data.");
    });
    it('should return a json object when config *is* present', function (){
      assert.deepEqual(configFile, app.loadConfig('config.json'));
    });
    it('should get the JSON data for a trello board', function (done) {
      app.getTrelloBoardData(configFile, "4d5ea62fd76aa1136000000c").then(function (res){
        try {
          assert.equal(res, testFile);
          done();
        } catch (err) {
          done(err);
        }
      });
    });
    it('should run from the command line', function (done) {
      var exec = require('child_process').exec
      exec('node index.js 4d5ea62fd76aa1136000000c', function (err, stdout, stderr){
        assert.equal(stdout, testFile);
        done();
      })
    });
  });
});

"use strict";
var Trello = require("node-trello");
var fs = require("fs");

var TrelloUpdate = {
  loadConfig: function (configFile){
    try {
      return JSON.parse(fs.readFileSync(configFile, "utf-8"));
    }
    catch (err) {
      // TODO: Add write new config to file!
      throw new Error("Something went wrong in parsing the data.");
    }
  },
  getTrelloBoardData: function (apiData, trelloBoardId) {
    var t = new Trello(apiData["trello_key"], apiData["trello_token"]);

    return new Promise(function (resolve, reject) {
      let boardId = trelloBoardId;
      t.get("/1/boards/" + boardId, {actions: ["createCard", "updateCard"]}, function(err, data) {
        if (err) throw err;
        resolve(JSON.stringify(data));
      });
    })
  },
  run: function () {
    var data = TrelloUpdate.loadConfig("config.json");
    var boardData = TrelloUpdate.getTrelloBoardData(data, process.argv[2]).then(function (res) {process.stdout.write(res)});
  }
}

if (!module.parent) {
  TrelloUpdate.run();
}

module.exports = TrelloUpdate;

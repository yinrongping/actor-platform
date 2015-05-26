var ActorClient = require('../utils/ActorClient');

var ActorAppDispatcher = require('../dispatcher/ActorAppDispatcher');
var ActorAppConstants = require('../constants/ActorAppConstants');

var ActionTypes = ActorAppConstants.ActionTypes;

module.exports = {
  sendMessageText: function(dialog, text) {
    ActorClient.sendMessageText(dialog.peer.peer, text);

    ActorAppDispatcher.dispatch({
      type: ActionTypes.SEND_MESSAGE_TEXT,
      dialog: dialog,
      text: text
    });
  }
};

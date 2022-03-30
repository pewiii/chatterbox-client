// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    var room = Rooms.checkRoomSelected();
    // console.log(room);
    for (var msg of data) {
      var roomname = JSON.stringify(msg.roomname);
      if (roomname === room) {
        MessagesView.renderMessage(msg);
      }
    }
    //console.log(RoomsView.rooms);
  },

  renderMessage: function(message, prepend) {
    // TODO: Render a single message.
    if (prepend) {
      // this.$chats.prepend(message.roomname + '    ' + message.username + '    ' + message.text + '<br>' + '<hr>');
      this.$chats.prepend(message.text + '<br>' + '<hr>');
    } else {
      this.$chats.append(message.text + '<br>' + '<hr>');
      // this.$chats.append(message.roomname + '     ' + message.username + '    ' + message.text + '<br>' + '<hr>');

    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
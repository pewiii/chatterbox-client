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
    MessagesView.$chats.empty();
    var room = Rooms.checkRoomSelected();
    // console.log(room);
    for (var msg of data) {
      var roomname = msg.roomname || 'null';
      if (roomname === room) {
        MessagesView.renderMessage(msg);
      }
    }
    $('.username').on('click', MessagesView.handleClick);
    //console.log(RoomsView.rooms);
  },

  renderMessage: function(message, prepend) {
    // TODO: Render a single message.
    var msg = MessageView.render(message);
    if (Friends.checkFriend(message.username)) {
      // msg = '<div style="color: blue">' + msg + '</div>';
      msg = '<span class="friendsColor">' + msg + '</span>';
    }
    if (prepend) {
      this.$chats.prepend(msg);
      // this.$chats.prepend(message.text + '<br>' + '<hr>');
    } else {
      // this.$chats.append(message.text + '<br>' + '<hr>');
      this.$chats.append(msg);
    }

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log(event.target.innerText);
    Friends.addFriend(event.target.innerText);
    App.fetch();
  }

};
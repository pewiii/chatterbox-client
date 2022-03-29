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
    for (var msg of data) {
      this.renderMessage(msg);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    this.$chats.append(message.text + '<br>');
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //RoomsView.rooms = Rooms;
    RoomsView.$select.change(RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var rooms = Rooms.getRooms();
    _.each(rooms, function(room) {
      RoomsView.$select.append('<option value="' + room + '">' + room + '</option>');
    });

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    MessagesView.$chats.empty();
    Rooms.add(roomname);
    RoomsView.render();
    RoomsView.$select.val(roomname);
    MessagesView.render();
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    RoomsView.renderRoom(event.target.value);

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var room = $('#message').val();
    RoomsView.renderRoom(room);
    console.log(room);
  }

};

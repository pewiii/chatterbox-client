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

  render: function(data) {
    // TODO: Render out the list of rooms.
    for (var msg of data) {
      if (Rooms.checkRoomExists(msg.roomname)) { continue; }
      RoomsView.$select.append('<option value="' + msg.roomname + '">' + msg.roomname + '</option>');
      Rooms.addRoom(msg.roomname);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log(event.target[1].innerHTML);
    // $(this).text
    //Rooms.selectRoom();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    console.log('click');
  }

};

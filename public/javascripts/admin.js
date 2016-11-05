$(document).ready(function() {
  $.get( "/shows", function( data ) {
    var shows = data.shows;
    //$('#list-shows').html(shows);
    for (var i = 0; i < shows.length; i++) {
      $('#list-shows').append('<li>'+shows[i].play+' </li>');
      //console.log(shows[i]);
    }
  });
});

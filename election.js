$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON' ,
  }).done(function(responseData){
    console.log(responseData.candidates[0].name);
    var test = $('#result');
    for (i = 0; i < responseData.candidates.length; i++){
      var can = $('<li>');
      // can.html(responseData.candidates[i].name);
      can.html(responseData.candidates[i].name + ' has ' + responseData.candidates[i].votes + ' votes.');
      test.append(can);
    }

  });

  // Imagination!

});

$(document).ready(function() {
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON' ,
  }).done(function(responseData){
    var test = $('#result');
    for (i = 0; i < responseData.candidates.length; i++){
      var can = $('<li>');
      // can.html(responseData.candidates[i].name);
      can.html(responseData.candidates[i].name + ' has ' + responseData.candidates[i].votes + ' votes.');
      test.append(can);

      $('#result').append(
        '<form method="POST" action="https://bb-election-api.herokuapp.com/vote" class="here">' +
          '<input type="hidden" name="name" value="'+ responseData.candidates[i].name+'">' +
          '<input class="vote" type="submit" value="vote"></form>'
      );
    }

    $('.here').click(function(e){

      e.preventDefault();

      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/vote',
        method: 'POST',
        data: {name: $(this).children('input[type=hidden]').val()},
        dataType: 'JSON'

      }).done(function(e){
        console.log(e);
      }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
      })
    });
  });
});

$(document).ready(function() {
  $("button").click(function(event) {
    var userInput = $("#userNumber").val();
    var fizzBuzz = function (userInput) {
      $('.list').empty();
      for (i = 1; i <= userInput; i++){
        if (i%3 === 0 && i%5 === 0){
          $('.list').append('fizz buzz' + '<br />');  }
        else if (i%3 === 0) {
          $('.list').append('fizz' + '<br />');  }
        else if (i%5 === 0){
            $('.list').append('buzz' + '<br />');  }
        else{
            $('.list').append(i + '<br />');  }
      };
    };
    if (+$('input').val()) {
      fizzBuzz($('input').val());
    }
    else { alert ('please enter a number.');
         }
  });
});
var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#addition-form').submit(function(event) {
    event.preventDefault();
    console.log(moment)
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(number1, number2);
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#multiplication-form').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#multiplication-form #number1').val());
    console.log(number1);
    var number2 = parseInt($('#multiplication-form #number2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(number1, number2);
    $('#solution').append("<li>" + output + "</li>");
  });
});

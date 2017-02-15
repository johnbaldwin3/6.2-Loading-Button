
var $ = require('jquery');

var model = require('./models/model.js');
var formTemplate = require('../templates/form.hbs');
var pizzaTemplate = require('../templates/pizza.hbs');


var todaysPizza = new model.PizzaCollection();


var pizzaName,
    pizzaIngr,
    pizzaType,
    pizzaNuts;

console.log(todaysPizza);

$(".form-group").html(formTemplate());

todaysPizza.on('sync', function(pizza) {
  $(".button-class").attr("disabled", false);
  $('.button-class').text("Get Pizzas");    $('.pizzas').html("");

  todaysPizza.forEach(function(pizza){
    pizza.get('pizza');
    console.log('pizza', pizza.toJSON());

    $('.pizzas').append(pizzaTemplate(pizza.toJSON()));

    //console.log('lasagna', lasagna.toJSON());
  });
});



todaysPizza.on('request', function(){
  //$('body').css("background-color", "orange");
  $('.button-class').text("Loading...");
})

$('.button-class').on('click', function(event){
  //event.preventDefault();
  $(".button-class").attr("disabled", true);
  todaysPizza.fetch();

});

$('#pizza-button').on('click', function(e) {
    e.preventDefault();
    pizzaName = $('#pizza-namer').val();
    pizzaIngr = $('#pizza-ingr').val();
    pizzaType = $('#pizza-type').val();
    pizzaNuts = $('#pizza-nuts').val();

   console.log(pizzaName, pizzaIngr, pizzaType, pizzaNuts);
});
//todaysLasagna.fetch();

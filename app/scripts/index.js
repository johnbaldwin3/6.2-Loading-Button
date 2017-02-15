
var $ = require('jquery');

var model = require('./models/model.js');
var formTemplate = require('../templates/form.hbs');
var pizzaTemplate = require('../templates/pizza.hbs');


var todaysPizza = new model.PizzaCollection();

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
//todaysLasagna.fetch();


var $ = require('jquery');

var model = require('./models/model.js');
var formTemplate = require('../templates/form.hbs');
var pizzaTemplate = require('../templates/pizza.hbs');


var todaysLasagna = new model.LasagnaCollection();

console.log(todaysLasagna);

todaysLasagna.on('sync', function(lasagna) {

    $('.button-class').text("Click Me...");
    $('.pizzas').html("");
    todaysLasagna.forEach(function(lasagna){
    lasagna.get('lasagna');
    console.log('lasagna', lasagna.toJSON());

    $('.pizzas').append(pizzaTemplate(lasagna.toJSON()));

    //console.log('lasagna', lasagna.toJSON());
  });
});



todaysLasagna.on('request', function(){
  //$('body').css("background-color", "orange");
  $('.button-class').text("Loading...");
})

$('.button-class').on('click', function(event){
  //event.preventDefault();

  todaysLasagna.fetch();

});
//todaysLasagna.fetch();


//3rd party
var $ = require('jquery');
var Backbone = require('backbone');

var Lasagna = Backbone.Model.extend();

var LasagnaCollection = Backbone.Collection.extend({
  model: Lasagna,
  url:'http://tiny-lasagna-server.herokuapp.com/collections/pizza/'
});


module.exports = {
  Lasagna: Lasagna,
  LasagnaCollection: LasagnaCollection
}

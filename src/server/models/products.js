/**
 * Created by VILLARUEL on 4/27/2017.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
  productName:{type:String , required:true,index:{unique:true}},
  category:{type:String},
  description:{type:String},
  price:Number,
  quantityStock:Number,
  photo:{type:String}
});

module.exports = mongoose.model('Products',ProductsSchema);

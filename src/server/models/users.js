/**
 * Created by VILLARUEL on 4/27/2017.
 */

/**
 * Created by VILLARUEL on 4/27/2017.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  firstName:{type:String},
  middleName:{type:String},
  lastName:{type:String},
  email:{type:String, required:true,index:{unique:true}}
});
module.exports = mongoose.model('Users',UsersSchema);

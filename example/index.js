var Mongoose = require("mongoose");
var conn = Mongoose.createConnection("mongodb://127.0.0.1/MSC-DEMO");
var Msc = require("../");
var User = Msc.M("User",{
  uname:{ type:String, index: true },
  upass:{ type:String},
}).pre("save",function(next){
  this.upass = this.uname+":"+Date.now();
  next();
}).post("save",function(){
  console.log("post-create",arguments);
})

var user = new User(conn);
user.create({uname:"Iamee"},function(err,u){
  console.log(err,u);
});

var Detail = Msc.M("Detail",{
  avatar:{ type:String,index:true}
}).pre("save",function(next){
  this.avatar = Date.now();
  next();
}).post("save",function(){
  console.log("...",arguments);
});
var detail = new Detail(conn);
detail.create({},console.log);

### OSR-MSC

#### How to user

    npm install osr-msc

#### Example

    var msc = require("osr-msc");

    var mongoose = require("mongoose");

    var conn = mongoose.createConnection("mongodb://127.0.0.1/Demo");

    var UserModel = msc.model('User',{
      uname: { type: String, index: true , required: true },
      update:{ type: Number, index: true }
    })
    .pre("save",function(next){
      this.update = Date.now();
      next();
    })
    .post("save",function(result){
      console.log("post.save",result);
    });

    var User = new UserModel( conn );

    User.create({uname:"uname"},console.log);

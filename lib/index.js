var Class = require('osr-class');
var Model = require("./model");
var Controller = require("./controller");
var Service = require("./service");
var _ = require("osr-utils");
var Msc = Class.extends({
  $ : function(){
    this.services = {};
    this.controllers = {};
    this.models = {};
    this.C = this.controller.bind(this);
    this.M = this.model.bind(this);
    this.S = this.service.bind(this);
  },
  controller: function( name, fns ){
    if(_.isFunction(fns)){
      var c = Controller.define(fns);
      this.controllers[name] = c;
    }
    return this.controllers[name];
  },
  service: function( name, fns ){
    if(_.isFunction(fns)){
      var s = Service.define(fns);
      this.services[name] = s;
    }
    return this.services[name];
  },
  model: function( name, schema ){
    if(_.isObject(schema)){
      var m = Model.define( name, schema );
      this.models[name] = m;
    }
    return this.models[name];
  }
});

module.exports = new  Msc;

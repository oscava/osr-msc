var Class = require("osr-class");

var _ = require("osr-utils");

var Controller = Class.extends({
  $ : function(){
    this.conn = conn;
    if(_.isFunction(this.init))this.init();
  }
})

Controller.define = function( fns ){
  var ControllerClass = Controller.extends( fns );
  return ControllerClass;
}

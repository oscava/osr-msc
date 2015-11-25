var Class = require("osr-class");
var _ = require("osr-utils");
var Serivce = Class.extends({
  $ : function( conn, root ){
    this.conn = conn;
    this.root = root;
    if(_.isFunction(this.init))this.init();
  }
});

Serivce.define = function( fns ){
  var ServiceClass = Service.extends(fns);
  return ServiceClass;
}
module.exports = Serivce;

var Class = require("osr-class");

var Schema = require("mongoose").Schema;

var Model = Class.extends({
  $: function(conn) {
    this.conn = conn;
    this.db = conn.model(this.name, this._schema, this.name);
  },
  findOne: function() {
    return this.db.findOne.apply(this.db, arguments);
  },
  find: function() {
    return this.db.find.apply(this.db, arguments);
  },
  update: function() {
    return this.db.update.apply(this.db, arguments);
  },
  findOneAndUpdate: function() {
    return this.db.findOneAndUpdate.apply(this.db, arguments);
  },
  remove: function() {
    return this.db.remove.apply(this.db, arguments);
  },
  create: function(inobj, cb) {
    // var db = new this.db();
    // Object.keys(this.schema).forEach(function(item, index) {
    //   if (undefined == inobj[item]) return;
    //   db[item] = inobj[item];
    // });
    // return db.save(cb);
    return this.db.create.apply(this.db,arguments);
  },
  where: function() {
    return this.db.where.apply(this.db, arguments);
  }
});



Model.define = function( name, schema ){
  var _schema = new Schema(schema);
  var ModelClass = Model.extends({
    name: name,
    schema: schema,
    _schema: _schema
  });
  ModelClass.post = function(){
    // ModelClass.prototype._schema.post(name,fn);
    // ModelClass.prototype._schema.post.apply(ModelClass.prototype._schema,arguments);
    this.prototype._schema.post.apply(this.prototype._schema,arguments);
    return this;
  };
  ModelClass.pre = function(){
    this.prototype._schema.pre.apply(this.prototype._schema,arguments);
    // ModelClass.prototype._schema.pre.apply(ModelClass.prototype._schema,arguments);
    return this;
  };
  return ModelClass;
}

module.exports = Model;

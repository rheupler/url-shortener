var monoose = require('mongoose');
var Schema = mongoose.Schema;

var CounterSchema = Schema({
  _id: {type: String, required: true},
  seq: {type: Number, default: 0}
});

var urlSchema = Schema({
  _id: {type: Number, index: true},
  long_url: String,
  created_at: Date
})

urlSchema.pre('save', function(next){
  var doc = this;
  // find the url_count and increment it by 1
  counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, function(error, counter) {
      if (error)
          return next(error);
      // set the _id of the urls collection to the incremented value of the counter
      doc._id = counter.seq;
      doc.created_at = new Date();
      next();
  });
});

var counter = mongoose.model('counter', CounterSchema);

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

var counter = mongoose.model('counter', CounterSchema);

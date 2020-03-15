const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true},
    link: { type: String, required: true },
    user: {type: Schema.Types.ObjectId, ref: '_id'}
  },
  { timestamps: true }
)

module.exports = mongoose.model('items', Item)

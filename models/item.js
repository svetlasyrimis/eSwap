const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
  {
//    title: { type: String, required: true },
//    link: { type: String, required: true },
		username: {type: String, required: true}
    user_id:{type: Schema.Types.ObjectId, ref: 'user_id'}
  },
  { timestamps: true }
)

module.exports = mongoose.model('items', Item)

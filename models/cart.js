const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  items: [
    {
      _id: false,
      item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'product',
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
});
module.Cart = mongoose.model('Cart', cartSchema);

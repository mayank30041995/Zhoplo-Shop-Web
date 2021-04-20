const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
       },
      quantity: {
        type: String,
        required: true,
      }
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});


cartSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

cartSchema.set('toJSON', {
    virtuals: true,
});

module.Cart = mongoose.model('Cart', cartSchema);

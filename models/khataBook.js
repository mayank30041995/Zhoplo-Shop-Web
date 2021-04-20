const mongoose = require('mongoose');

const khataBookSchema = new mongoose.Schema({
    houseNumber: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    area: {
        type: Boolean,
        default: false,
    },
    zipCode: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    itemsCount:{ 
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    items: [
        {
          _id: false,
          item: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          quantity: {
            type: String,
            required: true,
          },
        },
      ],
    isAvailable:{
        type: Boolean,
        default: false
    }
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;
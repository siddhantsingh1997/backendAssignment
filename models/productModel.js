const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxLength: [6, "Price Can not Exceed 8 Characters"],
  },
  rating: {
    type: Number,
    default: 0,
  }

});
module.exports = mongoose.model("Product", productSchema);

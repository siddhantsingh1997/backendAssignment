const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeature");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
 console.log("req",res.body);

 const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });

});


// Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {

  const apiFeature = new ApiFeatures(Product.find(), req.query).search();

  let products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
  });
});
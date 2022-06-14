const express = require("express");
const { createProduct,getAllProducts } = require("../controller/productController");


const router = express.Router();

router.route("/product/new").post(createProduct);
router.route("/products").get(getAllProducts);


module.exports = router;
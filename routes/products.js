const { Product } = require("../models/products");
const express = require("express");
const { Category } = require("../models/category");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
    const category =await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category');
  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  })
  product= await product.save();

  if(!Product)
  return res.status(500).send('The Product cannot be created')
  res.send(product);
});

module.exports= router;

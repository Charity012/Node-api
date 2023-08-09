const mongoose = require('mongoose');

//Call mongoose to create schema
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
       timestamps: true 
    }
)

//Create product model
const Product = mongoose.model('Product', productSchema);

//Export Product
module.exports = Product;


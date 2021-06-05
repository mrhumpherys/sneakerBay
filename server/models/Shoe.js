const { Schema, model } = require('mongoose');
const formatDate = require('../utils/date');

const shoeSchema = new Schema(
    {
        name: {
            type: String,
            required: 'You need a name for your sneakers!',
            minlength: 1,
            maxlength: 200
        },
        size: {
            type: String,
            required: 'You need a size for your sneakers!'
        },
        description: {
            type: String,
            required: 'You must have a description of your sneakers!',
            minlength: 1,
            maxlength: 1000
        },
        image:{
            type: String,
            default: './img/sneakers.svg'
        },
        price: {
            type: String,
            required: 'You must have a price for your sneakers!',
            minlength: 1,
            maxlength: 10
        },
        sold: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJson: {
            getters: true
        }
    }
);

const Shoe = model('Shoe', shoeSchema);

module.exports = Shoe;
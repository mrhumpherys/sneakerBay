const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const formatDate = require('../utils/date');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        toSell: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Shoe'
            }
        ],
        bought: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Shoe'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('sellCount').get(function() {
    return this.toSell.length;
});

userSchema.virtual('buyCount').get(function() {
    return this.bought.length;
});

const User = model('User', userSchema);

module.exports = User;
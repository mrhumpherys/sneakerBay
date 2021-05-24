const { User, Shoe } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('toSell')
                    .populate('bought');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        shoes: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Shoe.find(params).sort({ createdAt: -1 });
        },
        shoe: async (parent, { _id }) => {
            return Shoe.findOne({ _id });
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('toSell')
                .populate('bought');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('toSell')
                .populate('bought');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addShoe: async (parent, args, context) => {
            if (context.user) {
              const shoe = await Shoe.create({ ...args.input, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { toSell: shoe._id } },
                { new: true }
              );
          
              return shoe;
            }
          
            throw new AuthenticationError('You need to be logged in!');
        },
        removeShoe: async (parent, args, context) => {
            if (context.user) {
                await Shoe.findOneAndDelete({ _id: args._id });
                const updateUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { toSell: { _id: args._id } } },
                    { new: true }
                );

                return updateUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        buyShoe: async (parent, args, context) => {
            if (context.user) {
                await Shoe.findOneAndUpdate({ _id: args._id }, { sold: true });
                const updateUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { bought: args._id } },
                    { new: true }
                );

                return updateUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }
};

module.exports = resolvers;
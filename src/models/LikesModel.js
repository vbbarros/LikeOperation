const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types;

const LikesSchema = new Mongoose.Schema(
    {
        idPost: Number,
        idUser: Number,
        createdAt: { type: Date, default: Date.now() }
    }
)

module.exports = Mongoose.model("likes", LikesSchema);

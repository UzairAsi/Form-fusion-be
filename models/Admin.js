const mongoose = require("mongoose");

const schema = mongoose.Schema;

const admin = new schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: false,
    },
    isGoogleLoginIn: {
      type: Boolean,
      required: false,
    },
    createdForm: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Forms",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", admin);

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Form = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    responses: {
      type: Number,
      default: 0,
      required: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin", 
    },
    isPublished: {
        type: Boolean,
        default: false,
        required: false
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Forms", Form);

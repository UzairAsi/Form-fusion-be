const mongoose = require("mongoose");

const schema = mongoose.Schema;
// Question Type = "phoneNumber,multipleChoice,contactInfo,textbox,yesno."

const contactInfoSchema = {isRequired: {
  type: Boolean,
  default: false
},
answer: {
  type: String,
  required: false
},}

const questions = new schema(
  {
    question: {
      type: String,
      required: true,
    },
    questionType: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
      required: false,
    },
    isRequired: {
      type: Boolean,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    multipleChoice: {
      options: [{
        option: {
          type: String,
          required: true
        },
      }],
    },
    answer: {
      type: String,
      required: false
    },
    contactInfo: {
      firstName: contactInfoSchema,
      lastName: contactInfoSchema,
      phoneNumber: contactInfoSchema,
      email: contactInfoSchema,
      companyName: contactInfoSchema
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questions);

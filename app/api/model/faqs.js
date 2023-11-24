import mongoose from "mongoose";
var Schema = mongoose.Schema;

var faqs = new Schema({
  label: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var Faq = mongoose.model("Faqs", faqs);

export default Faq;

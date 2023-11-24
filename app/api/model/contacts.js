import mongoose from "mongoose";
var Schema = mongoose.Schema;

var contacts = new Schema({
  name: {
    type: String,
    required: true,
  },
  email_address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var Contact = mongoose.model("Contacts", contacts);

export default Contact;

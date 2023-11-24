import Faq from "../model/faqs";

const mongoose = require("mongoose");
export async function GET(request) {
  await mongoose.connect(
    "mongodb+srv://hossainshohan1:n3E33d0p1IMVBkZc@cluster0.puyt7ir.mongodb.net/?retryWrites=true&w=majority"
  );
  var faq = new Faq({
    label: "TEST 1 label",
    children: "TEST 1 children",
  });
  // Create new instaces
  var faqcreated = await faq.save();
  return Response.json([
    {
      key: "1",
      label: "Is it free?",
      children: "Yes, it is free to use. But i",
    },
    {
      key: "2",
      label: "Do I need to login first?",
      children: "No",
    },
    {
      key: "3",
      label: "Is there any limit?",
      children: "No",
    },
    {
      key: "4",
      label: "Can I buy you a coffee",
      children: "Yes, you can",
    },
    {
      key: "5",
      label: "Can I contact with you?",
      children: "Yes, you can via hossain_shohan1@live.com",
    },
  ]);
}

const { Schema, model } = require("mongoose");
const { FormFieldSchema } = require("./form_field");

const FormSchema = new Schema({
  fields: [FormFieldSchema],
});

const FormModel = model("Form", FormSchema);

module.exports = FormModel;

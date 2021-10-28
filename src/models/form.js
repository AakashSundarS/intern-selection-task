const { Schema, model } = require("mongoose");
const { FormFieldSchema } = require("./form_field");

const FormSchema = new Schema({
  fields: {
    type: [FormFieldSchema],
    required: true,
    validate: {
      message: "atleast one field required",
      validator(value) {
        return value.length > 0;
      },
    },
  },
});

const FormModel = model("Form", FormSchema);

module.exports = FormModel;

const { Schema } = require("mongoose");

const fieldTypes = ["RADIO", "TEXT", "CHECKBOX"];

const FormFieldSchema = new Schema({
  type: {
    type: String,
    enum: {
      values: fieldTypes,
      message: `field type should be one of ${fieldTypes.join(", ")}`,
    },
    required: [true, 'form field should have "type" property'],
  },
  data: {
    type: String,
    required: true,
  },
});

module.exports = { FormFieldSchema, fieldTypes };

const Form = require("../models/form");
const { Router } = require("express");
const validationErrorToErrors = require("../utils/validationErrorToErrors");

const router = Router();

router.post("/new", async (req, res) => {
  try {
    const { body } = req;
    const newForm = new Form(body);

    const validationError = newForm.validateSync();

    if (validationError) {
      res
        .status(400)
        .send({ errors: validationErrorToErrors(validationError) });
      return;
    }

    await newForm.save();

    res.status(201).send({ formId: newForm._id });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;

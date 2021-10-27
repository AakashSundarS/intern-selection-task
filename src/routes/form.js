const Form = require("../models/form");
const { Router } = require("express");
const validationErrorToErrors = require("../utils/validationErrorToErrors");
const { ObjectID } = require("bson");

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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    res.sendStatus(404);
    return;
  }

  const form = await Form.findOne({ _id: id });

  if (!form) {
    res.sendStatus(404);
    return;
  }

  res.send(form);
});

module.exports = router;

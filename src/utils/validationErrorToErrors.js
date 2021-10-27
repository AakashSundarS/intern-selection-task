function validationErrorToErrors(validationError) {
  const { errors } = validationError;

  return Object.values(errors).map((o) => o.message);
}

module.exports = validationErrorToErrors;

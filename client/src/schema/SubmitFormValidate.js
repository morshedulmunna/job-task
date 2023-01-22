import * as yup from "yup";

export const submitFormValidate = yup.object().shape({
  name: yup.string("Name should be String").required("Name is require"),

  sectorType: yup
    .string("sectorType type should be a string")
    .required("Please select a sector"),
  checked: yup
    .boolean()
    .oneOf([true], "You need to agree the terms and conditions"),
});

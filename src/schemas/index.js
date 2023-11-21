import * as yup from "yup";

const addressSchema = yup.object().shape({
  addressLine1: yup.string("Address required").required("Address required"),
  city: yup.string("City required").required("City required"),
  ZIPCode: yup
    .string()
    .matches(/^[0-9]{5}$/, "Must be a 5-digit number")
    .required("Zip code is required"),
});

export const employeeSchema = yup.object().shape({
  name: yup.string("Name required").required("Name required"),
  email: yup.string().email("Valid email required").required("Email required"),
  phoneNumber: yup
    .string()
    .test(
      "is-at-least-ten-digits",
      "Enter a valid phone number (include country code)",
      (value) => value && value.replace(/\D/g, "").length > 10
    )
    .required("Phone number is required"),
  homeAddress: addressSchema,
  dateOfBirth: yup.string().required("Date of birth required"),
  dateOfEmployment: yup.string().required("Date of hire required"),
});

// export const combinedValidationSchema = yup.object().shape({
//   ...employeeSchema.fields,
//   ...addressSchema.fields,
// });

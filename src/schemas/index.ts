import * as yup from "yup";

const addressSchema = yup.object().shape({
  addressLine1: yup.string().required("Address required"),
  city: yup.string().required("City required"),
  ZIPCode: yup
    .string()
    .matches(/^[0-9]{5}$/, "Must be a 5-digit number")
    .required("Zip code is required"),
});

export const employeeSchema = yup.object().shape({
  name: yup.string().required("Name required"),
  email: yup.string().email("Valid email required").required("Email required"),
  phoneNumber: yup
    .string()
    .test(
      "is-at-least-ten-digits",
      "Enter a valid phone number (include country code)",
      (value) => {
        const cleanedValue = value?.trim() ?? "";
        return cleanedValue.length > 10;
      }
    )
    .required("Phone number is required"),
  homeAddress: addressSchema,
  dateOfBirth: yup.string().required("Date of birth required"),
  dateOfEmployment: yup.string().required("Date of hire required"),
});

import { Box } from "@mui/material";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { employeeSchema } from "../../schemas";
import "./EmployeeForm.css";
import { addEmployee } from "../../api/employees";
import { useNavigate } from "react-router-dom";

const personInputFields = [
  { id: "name", type: "text", placeHolder: "Name" },
  { id: "email", type: "email", placeHolder: "Email" },
  { id: "phoneNumber", type: "text", placeHolder: "Phone" },
];

const addressInputFields = [
  { id: "addressLine1", type: "text", placeHolder: "Address" },
  { id: "city", type: "text", placeHolder: "City" },
  { id: "ZIPCode", type: "text", placeHolder: "Zip Code" },
];

const EmployeeForm = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    const prefixedPhoneNumber = "+" + values.phoneNumber;
    const updatedValues = { ...values, phoneNumber: prefixedPhoneNumber };
    try {
      const response = await addEmployee(updatedValues);
      console.log("Success:", response.data);
      navigate("/employees");
    } catch (err) {
      console.error(err);
    }
  };

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      dateOfEmployment: "",
      homeAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        ZIPCode: "",
      },
    },
    validationSchema: employeeSchema,
    onSubmit,
  });

  const trackErrors = (obj) => {
    return Object.keys(obj).length > 0;
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        style={{
          boxShadow:
            "13px 16px 15px -3px rgba(0,0,0,0.1),0px 6px 15px 7px rgba(0,0,0,0.1)",
          padding: "40px 80px",
        }}
        sx={{
          display: "flex",
          gap: 20,
          borderRadius: 5,
          marginTop: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {personInputFields.map((field) => (
            <TextField
              sx={{ width: 300 }}
              label={field.placeHolder}
              variant="standard"
              key={field.id}
              id={field.id}
              type={field.type}
              value={values[field.id]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors[field.id] && touched[field.id] ? "input-error" : ""
              }
            />
          ))}
          {addressInputFields.map((field) => (
            <TextField
              sx={{ width: 300 }}
              label={field.placeHolder}
              variant="standard"
              key={field.id}
              id={field.id}
              type={field.type}
              value={values.homeAddress[field.id]}
              onChange={(e) =>
                setFieldValue(`homeAddress.${field.id}`, e.target.value)
              }
              onBlur={handleBlur}
              className={
                (touched[field.id] &&
                  errors.homeAddress &&
                  errors.homeAddress[field.id]) ||
                (touched.homeAddress &&
                  errors.homeAddress &&
                  errors.homeAddress[field.id])
                  ? "input-error"
                  : ""
              }
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <label style={{ color: "#646669" }} htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              className={
                errors.dateOfBirth && touched.dateOfBirth ? "input-error" : ""
              }
              style={{ padding: "10px", marginTop: "-20px" }}
              type="date"
              id="dateOfBirth"
              value={values.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dateOfBirth && touched.dateOfBirth && (
              <span className="date-error">{errors.dateOfBirth}</span>
            )}
            <label style={{ color: "#646669" }} htmlFor="dateOfEmployment">
              Date of Hire
            </label>
            <input
              className={
                errors.dateOfEmployment && touched.dateOfEmployment
                  ? "input-error"
                  : ""
              }
              style={{
                padding: "10px",
                marginTop: "-20px",
              }}
              type="date"
              id="dateOfEmployment"
              value={values.dateOfEmployment}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dateOfEmployment && touched.dateOfEmployment && (
              <span className="date-error">{errors.dateOfEmployment}</span>
            )}
          </Box>
          <Box sx={{ alignSelf: "flex-end" }}>
            <Button
              disabled={isSubmitting}
              type="submit"
              sx={{ width: "200px" }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      {trackErrors(errors) && trackErrors(touched) && (
        <Box sx={{ display: "flex" }}>
          {personInputFields.map(
            (field) =>
              errors[field.id] &&
              touched[field.id] && (
                <span key={field.placeHolder} className="error">
                  *{errors[field.id]}
                </span>
              )
          )}
          {addressInputFields.map((field) => (
            <Box sx={{ marginTop: -0.6 }} key={field.placeHolder}>
              {touched[field.id] && (
                <span key={`error-${field.id}`} className="error">
                  {errors.homeAddress && errors.homeAddress[field.id]}
                </span>
              )}
              {touched.homeAddress && errors.homeAddress && (
                <span key={`error-homeAddress-${field.id}`} className="error">
                  {errors.homeAddress[field.id]}
                </span>
              )}
            </Box>
          ))}
        </Box>
      )}
    </form>
  );
};

export default EmployeeForm;

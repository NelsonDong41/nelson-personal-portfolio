import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StyledH3, StyledLink, StyledBody1 } from "../SectionTypography";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const StyledForm = styled.form`
  padding: 5%;
`;

const ContactSectionContent: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState<any>();
  const [formValues, setFormValues] = useState<any>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // submit code
    // if(response.ok) {
    setFormValues({});
    setSubmitted(true);
    // }
  };

  useEffect(() => {
    setErrorMessages(errors);
  }, [errors]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        mt: 1,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        margin="normal"
        {...register("firstName", { required: true })}
        error={!!errors.firstName}
        label="First Name"
        variant="filled"
        fullWidth
        helperText={
          "message" in (errorMessages?.firstName || {})
            ? `${
                errorMessages?.firstName.message ||
                "Please enter your first name!"
              }`
            : ""
        }
        value={formValues.firstName}
        onChange={(e) =>
          setFormValues((prev: any) => ({ ...prev, firstName: e.target.value }))
        }
      />
      <TextField
        margin="normal"
        {...register("lastName", { required: false })}
        error={!!errors.lastName}
        label="Last Name"
        variant="filled"
        fullWidth
      />
      <TextField
        margin="normal"
        {...register("email", { required: true })}
        error={!!errors.email}
        label="Email"
        variant="filled"
        fullWidth
        helperText={
          "message" in (errorMessages?.email || {})
            ? `${
                errorMessages?.email.message ||
                "Please enter an email so I can follow up with you!"
              }`
            : ""
        }
      />
      <TextField
        margin="normal"
        {...register("message", { required: true })}
        error={!!errors.message}
        label="Message"
        multiline
        rows={4}
        variant="filled"
        fullWidth
        helperText={
          "message" in (errorMessages?.message || {})
            ? `${
                errorMessages?.message.message ||
                "A message with this would be very cool!"
              }`
            : ""
        }
      />

      <Button type="submit" variant="contained">
        Send Message
      </Button>

      {submitted && <Typography variant="body1">Thank you!</Typography>}
    </Box>
  );
};

export default ContactSectionContent;

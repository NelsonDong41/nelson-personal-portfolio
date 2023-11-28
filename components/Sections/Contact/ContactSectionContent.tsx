import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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

  const onSubmit = async (data: any) => {
    const response = await axios.post("/api/contactMe", data);

    if (response.data.message) {
      alert("ok");
      setFormValues({});
      setSubmitted(true);
    }
  };

  useEffect(() => {
    setErrorMessages(errors);
  }, [errors]);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        margin: "3%",
        height: "55vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{width: "100%", display: "flex", gap: "2vw"}}>
        <TextField
          fullWidth
          margin="normal"
          {...register("firstName", { required: true })}
          error={!!errors.firstName}
          label="First Name"
          variant="filled"
          helperText={
            "message" in (errorMessages?.firstName || {})
              ? `${
                  errorMessages?.firstName.message ||
                  "Please enter your first name!"
                }`
              : ""
          }
          value={formValues.firstName || ""}
          onChange={(e) => {
            setFormValues((prev: any) => ({
              ...prev,
              firstName: e.target.value,
            }));
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          {...register("lastName", { required: false })}
          error={!!errors.lastName}
          label="Last Name"
          variant="filled"
          value={formValues.lastName || ""}
          onChange={(e) => {
            setFormValues((prev: any) => ({
              ...prev,
              lastName: e.target.value,
            }));
          }}
        />
      </div>
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
        value={formValues.email || ""}
        onChange={(e) => {
          setFormValues((prev: any) => ({ ...prev, email: e.target.value }));
        }}
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
        value={formValues.message || ""}
        onChange={(e) => {
          setFormValues((prev: any) => ({ ...prev, message: e.target.value }));
        }}
      />

      <Button type="submit" variant="contained" style={{marginTop: "3vh"}}>
        Send Message
      </Button>

      {submitted && <Typography variant="body1">Thank you!</Typography>}
    </Box>
  );
};

export default ContactSectionContent;

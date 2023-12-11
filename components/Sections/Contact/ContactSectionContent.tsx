import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/types";
import { toast } from "sonner";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const SNACKBAR_TIMER = 5000;

const ContactSectionContent: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState<any>();
  const [formValues, setFormValues] = useState<any>({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("/api/contactMe", data);
      if (response.data.message) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, SNACKBAR_TIMER);
        setFormValues({});
        reset();
        return;
      }
    } catch (err) {
      toast.error("Something went wrong when sending message!");
    }
  };

  useEffect(() => {
    setErrorMessages(errors);
  }, [errors]);

  return (
    <>
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
        <div style={{ width: "100%", display: "flex", gap: "2vw" }}>
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
            color="info"
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
            label="Last Name"
            variant="filled"
            value={formValues.lastName || ""}
            color="info"
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
          color="info"
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
          color="info"
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
            setFormValues((prev: any) => ({
              ...prev,
              message: e.target.value,
            }));
          }}
        />

        <Button type="submit" variant="contained" style={{ marginTop: "3vh" }}>
          Send Message
        </Button>
      </Box>

      <Snackbar
        open={submitted}
        message="Email Sent!"
        autoHideDuration={SNACKBAR_TIMER}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        style={{
          margin: "2vh 2vw",
          width: "25vw",
          borderRadius: "5px",
        }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactSectionContent;

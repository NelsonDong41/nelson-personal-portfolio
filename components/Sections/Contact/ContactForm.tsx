import { SNACKBAR_TIMER } from "@/lib/constants";
import { ContactFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ContactFormInputs } from "./ContactSectionContent";
import SendIcon from "@mui/icons-material/Send";
import CustomToast from "@/components/CustomToast/CustomToast";


export default function ContactForm() {
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
  const [hoverSend, setHoverSend] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        margin: "3%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: "2vh",
      }}
    >
      <TextField
        fullWidth
        margin="normal"
        {...register("name", { required: true })}
        error={!!errors.name}
        label="First Name"
        variant="filled"
        helperText={
          "message" in (errorMessages?.name || {})
            ? `${
                errorMessages?.name.message || "Please enter your first name!"
              }`
            : ""
        }
        color="info"
        value={formValues.name || ""}
        onChange={(e) => {
          setFormValues((prev: any) => ({
            ...prev,
            name: e.target.value,
          }));
        }}
      />
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
        rows={3}
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

      <Button
        type="submit"
        variant="contained"
        style={{ display: "flex", gap: `${hoverSend ? "1vw" : "0.5vw"}`, transition: "all 300ms"}}
        onMouseEnter={() => setHoverSend(true)}
        onMouseLeave={() => setHoverSend(false)}
      >
        <SendIcon style={{transform: `${isSubmitting ? "translateX(10vw)" : ""}`, transition: "ease-in-out 200ms" }}/>
        Send Message
      </Button>
      <CustomToast severity="success" open={submitted} message="Email Sent!" />
    </Box>
  );
}

import {
  Paper,
} from "@mui/material";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/types";
import ContactForm from "./ContactForm";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const ContactSectionContent: React.FC = () => {

  return (
    <>
      <Paper style={{margin: "0 0 10vh 0"}}>
        <ContactForm/>
      </Paper>
    </>
  );
};

export default ContactSectionContent;

import {
  Paper,
} from "@mui/material";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/types";
import ContactForm from "./ContactForm";
import { useContext } from "react";
import { MobileViewContext } from "@/pages/_app";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const ContactSectionContent: React.FC = () => {
  const {isMobileView} = useContext(MobileViewContext);
  return (
    <>
      <Paper style={{margin: `${isMobileView ? "0 10vw 10vh 10vw" : "0 0 10vh 0"}`}}>
        <ContactForm/>
      </Paper>
    </>
  );
};

export default ContactSectionContent;

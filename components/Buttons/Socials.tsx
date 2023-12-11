import styled from "@emotion/styled";
import { IconButton, Modal, Stack, Tooltip, Typography } from "@mui/material";
import Interactable from "@/components/Util/Interactable";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useEffect, useState } from "react";
import CustomToast from "@/components/CustomToast/CustomToast";
import { SNACKBAR_TIMER } from "@/lib/constants";
import ContactForm from "../Sections/Contact/ContactForm";

interface SocialIconWrapperProps {
  children: React.ReactElement;
  copyToClipboard?: boolean;
  link: string;
  name: string;
}

const StyledStack = styled(Stack)`
  flex-direction: row;
  gap: 2vw;
  margin: 5vh 0 0 0;
`;

export default function Socials() {
  const [copied, setCopied] = useState(false);
  const [contactFormModalOpen, setContactFormModalOpen] = useState(false);
  const SocialIconOnClick = (copyToClipboard?: boolean, link?: string) => {
    if (copyToClipboard && link) {
      navigator.clipboard.writeText(link!);
      setTimeout(() => {
        setCopied(false);
      }, SNACKBAR_TIMER);
      setCopied(true);
    } else if (!copyToClipboard && link) {
      window.open(link || "404", "_blank");
    }
  };

  const SocialIconWrapper: React.FC<SocialIconWrapperProps> = ({
    copyToClipboard,
    children,
    link,
    name,
  }: SocialIconWrapperProps) => {
    return (
      <Tooltip title={name}>
        <IconButton color="info" style={{ fontSize: "normal" }}>
          <Interactable
            onMouseClick={() => SocialIconOnClick(copyToClipboard, link)}
          >
            {children}
          </Interactable>
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <>
      <StyledStack>
        <SocialIconWrapper
          name="LinkedIn"
          link="https://www.linkedin.com/in/nelson-dong"
        >
          <LinkedInIcon fontSize="large"></LinkedInIcon>
        </SocialIconWrapper>
        <SocialIconWrapper
          name="Github"
          link="https://www.github.com/NelsonDong41"
        >
          <GitHubIcon fontSize="large"></GitHubIcon>
        </SocialIconWrapper>
        <SocialIconWrapper
          name="Email"
          link="nelsondong158@gmail.com"
          copyToClipboard={true}
        >
          <EmailIcon fontSize="large"></EmailIcon>
        </SocialIconWrapper>
        <SocialIconWrapper name="Resume" link="./Nelson_Dong_resume.pdf">
          <ContactMailIcon fontSize="large"></ContactMailIcon>
        </SocialIconWrapper>
      </StyledStack>

      <CustomToast
        open={copied}
        severity="info"
        message={`Copied Email to Clipboard!`}
      ></CustomToast>

      <Modal
        open={contactFormModalOpen}
      >
        <ContactForm />
      </Modal>
    </>
  );
}

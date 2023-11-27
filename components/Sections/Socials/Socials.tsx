import styled from "@emotion/styled";
import { IconButton, Modal, Stack, Tooltip, Typography } from "@mui/material";
import Interactable from "@/components/Util/Interactable";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useState } from "react";

interface SocialIconWrapperProps {
  children: React.ReactNode;
  copyToClipboard?: boolean;
  link: string;
  name: string;
}

const StyledStack = styled(Stack)`
  flex-direction: row;
  gap: 2vw;
  margin: 5vh 0 0 0;
`;

const StyledModalContainer = styled.div`
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  padding: 5vh;
`;

const StyledModel = styled(Modal)``;
const StyledModelContent = styled.div``;

export default function Socials() {
  const [Copied, setCopied] = useState(false);

  const SocialIconOnClick = (copyToClipboard?: boolean, link?: string) => {
    if (copyToClipboard) {
      navigator.clipboard.writeText(link!);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
      setCopied(true);
    } else {
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
        <SocialIconWrapper
          name="Full Contact"
          link="{email: nelsondong158@gmail.com, phone: 917-502-7700, Location: Boston, Availability: May 2024 - December 2024}"
          copyToClipboard={true}
        >
          <ContactMailIcon fontSize="large"></ContactMailIcon>
        </SocialIconWrapper>
      </StyledStack>

      <StyledModalContainer>
        <StyledModel
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={Copied}
          onClose={() => setCopied(false)}
        >
          <StyledModelContent>Copied to Clipboard!</StyledModelContent>
        </StyledModel>
      </StyledModalContainer>
    </>
  );
}

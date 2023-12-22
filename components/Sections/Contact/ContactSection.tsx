import Center from "@/components/Util/Center";
import Section, { SectionProps } from "../Section";
import { StyledH1 } from "../SectionTypography";
import ContactSectionContent from "./ContactSectionContent";
import { Divider } from "@mui/material";
import { MobileViewContext } from "@/pages/_app";
import { useContext } from "react";

interface ContactSectionProps extends SectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({
  id,
}: ContactSectionProps) => {
  const { isMobileView } = useContext(MobileViewContext);
  return (
    <Section id={id} title={`${isMobileView ? "Contact Me Here!" : undefined}`}>
      <>
        {!isMobileView && (
          <>
            <Divider style={{ margin: "5vh 0 10vh 0" }} />
            <Center>
              <StyledH1>Contact Me Here!</StyledH1>
            </Center>
            <Divider style={{ margin: "10vh 0 12vh 0" }} />
          </>
        )}
        <ContactSectionContent />
      </>
    </Section>
  );
};

export default ContactSection;

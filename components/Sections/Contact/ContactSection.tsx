import Section, { SectionProps } from "../Section";
import ContactSectionContent from "./ContactSectionContent";

interface ContactSectionProps extends SectionProps {
}

const ContactSection : React.FC<ContactSectionProps> = ({ id} : ContactSectionProps) => {
  return (
    <Section id = {id}>
      <ContactSectionContent />
    </Section>
  )
}

export default ContactSection;
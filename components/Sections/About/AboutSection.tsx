import Section, { SectionProps } from "../Section";
import AboutSectionContent from "./AboutSectionContent";

interface AboutSectionProps extends SectionProps {
}

const AboutSection : React.FC<AboutSectionProps> = ({ id} : AboutSectionProps) => {
  return (
    <Section id = {id}>
      <AboutSectionContent />
    </Section>
  )
}

export default AboutSection;
import Section, { SectionProps } from "../Section";
import AboutSectionContent from "./AboutSectionContent";

interface AboutSectionProps extends SectionProps {
}

const AboutSection : React.FC<AboutSectionProps> = ({ id, title} : AboutSectionProps) => {
  return (
    <Section id = {id} title = {title}>
      <AboutSectionContent />
    </Section>
  )
}

export default AboutSection;
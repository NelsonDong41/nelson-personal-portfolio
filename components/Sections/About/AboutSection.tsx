import Section, { SectionProps } from "../Section";
import AboutSectionContent from "./AboutSectionContent";

interface AboutSectionProps extends SectionProps {
}

const AboutSection : React.FC<AboutSectionProps> = ({title, id} : AboutSectionProps) => {
  return (
    <Section title = {title || ""} id = {id}>
      <AboutSectionContent />
    </Section>
  )
}

export default AboutSection;
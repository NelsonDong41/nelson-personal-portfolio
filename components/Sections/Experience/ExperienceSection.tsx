import Section, { SectionProps } from "../Section";
import ExperienceSectionContent from "./ExperienceSectionContent";

interface ExperienceSectionProps extends SectionProps {}

const AboutSection: React.FC<ExperienceSectionProps> = ({
  id,
}: ExperienceSectionProps) => {
  return (
    <Section id={id}>
      <ExperienceSectionContent />
    </Section>
  );
};

export default AboutSection;

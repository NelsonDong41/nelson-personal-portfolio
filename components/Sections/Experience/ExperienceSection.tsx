import Section, { SectionProps } from "../Section";
import ExperienceSectionContent from "./ExperienceSectionContent";
import { ExperienceCardInfos } from "@/util/constants";

interface ExperienceSectionProps extends SectionProps {}


const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
}: ExperienceSectionProps) => {
  return (
    <Section id={id}>
      <ExperienceSectionContent CardInfos = {ExperienceCardInfos}/>
    </Section>
  );
};

export default ExperienceSection;

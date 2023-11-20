import { ProjectCardInfos } from "@/util/constants";
import ExperienceSectionContent from "../Experience/ExperienceSectionContent";
import Section, { SectionProps } from "../Section";

interface ProjectSectionProps extends SectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  id,
}: ProjectSectionProps) => {
  return (
    <Section id={id}>
      <ExperienceSectionContent CardInfos = {ProjectCardInfos} />
    </Section>
  );
};

export default ProjectSection;

import { ProjectCardInfos } from "@/util/constants";
import ExperienceSectionContent from "../Experience/ExperienceSectionContent";
import Section, { SectionProps } from "../Section";
import styled from "@emotion/styled";


interface ProjectSectionProps extends SectionProps {}

const StyledClosingLink = styled.div`
  display: flex;
`;

const ProjectSection: React.FC<ProjectSectionProps> = ({
  id,
}: ProjectSectionProps) => {
  return (
    <Section id={id}>
      <ExperienceSectionContent CardInfos = {ProjectCardInfos} />
      <StyledClosingLink>Checkout All Experiences</StyledClosingLink>
    </Section>
  );
};

export default ProjectSection;

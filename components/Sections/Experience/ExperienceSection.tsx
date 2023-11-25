import styled from "@emotion/styled";
import Section, { SectionProps } from "../Section";
import ExperienceSectionContent from "./ExperienceSectionContent";
import { ExperienceCardInfos } from "@/util/constants";

interface ExperienceSectionProps extends SectionProps {}

const StyledClosingLink = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 2% 6%;
`;

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
}: ExperienceSectionProps) => {
  return (
    <Section id={id}>
      <ExperienceSectionContent CardInfos = {ExperienceCardInfos}/>
      <StyledClosingLink>Checkout All Experiences</StyledClosingLink>
    </Section>
  );
};

export default ExperienceSection;

import styled from "@emotion/styled";
import Section, { SectionProps } from "../Section";
import ExperienceSectionContent from "./ExperienceSectionContent";
import { ExperienceCardInfos } from "@/util/constants";
import { useEffect, useState } from "react";

interface ExperienceSectionProps extends SectionProps {}

const StyledClosingLink = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 2% 6%;
`;

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
}: ExperienceSectionProps) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
  }, [openModal, setOpenModal]);

  return (
    <Section id={id}>
      <ExperienceSectionContent CardInfos={ExperienceCardInfos} />
      <a href="./Nelson_Dong_resume.pdf">
        Checkout All Experiences! (on my Resume)
      </a>
    </Section>
  );
};

export default ExperienceSection;

import { PROJECT_DISPLAYED_COUNT, ProjectCardInfos } from "@/lib/constants";
import ExperienceSectionContent from "../Experience/ExperienceSectionContent";
import Section, { SectionProps } from "../Section";
import styled from "@emotion/styled";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import Interactable from "@/components/Util/Interactable";
import { useTheme } from "@mui/material";
import Link from "next/link";

interface ProjectSectionProps extends SectionProps {}

const StyledClosingLink = styled(Link)<{ hovered: string }>`
  display: flex;
  align-items: center;
  margin: 2% 6%;
  text-decoration: none;
  color: ${(props) => props.color};
  gap: 1vw;
  text-decoration: ${(props) => props.hovered === "true" ? "underline" : "none"};
`;

const StyledArrowRight = styled(ArrowForward)<{ hovered: string }>`
  transition: all 400ms ease;
  transform: ${(props) => props.hovered === "true" ? "translateX(100%)" : ""};
`;

const ProjectSection: React.FC<ProjectSectionProps> = ({
  id,
}: ProjectSectionProps) => {
  const [linkHovered, setLinkHovered] = useState(false);
  const theme = useTheme();
  return (
    <Section id={id}>
      <ExperienceSectionContent CardInfos={ProjectCardInfos.slice(0, PROJECT_DISPLAYED_COUNT)} />
      <Interactable
        onMouseIn={() => setLinkHovered(true)}
        onMouseOut={() => setLinkHovered(false)}
      >
        <StyledClosingLink
          color={theme.palette.text.primary}
          hovered={linkHovered.toString()}
          href="/AllProjects"
        >
          Checkout My Older Projects! <StyledArrowRight hovered={linkHovered.toString()} />
        </StyledClosingLink>
      </Interactable>
    </Section>
  );
};

export default ProjectSection;

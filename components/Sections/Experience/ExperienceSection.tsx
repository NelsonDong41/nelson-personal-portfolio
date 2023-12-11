import styled from "@emotion/styled";
import Section, { SectionProps } from "../Section";
import ExperienceSectionContent from "./ExperienceSectionContent";
import { EXPERIENCE_DISPLAYED_COUNT, ExperienceCardInfos } from "@/lib/constants";
import { useState } from "react";
import Interactable from "@/components/Util/Interactable";
import { useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

interface ExperienceSectionProps extends SectionProps {}

export const StyledClosingLink = styled(Link)<{hovered : string, current?: string}>`
  display: flex;
  align-items: center;
  margin: 2% 6%;
  text-decoration: none;
  color: ${props => props.color};
  gap: 0.5vw;
  text-decoration: ${props => props.hovered === (props.current || "true") ? 'underline' : 'none'};
`;

const StyledArrowRight = styled(ArrowForward)<{hovered : string}>`
  transition: all 400ms ease;
  transform: ${props => props.hovered === "true" ? "translateX(100%)" : ""};
`;

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
}: ExperienceSectionProps) => {
  const theme = useTheme();
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <Section id={id}>
      <ExperienceSectionContent CardInfos={ExperienceCardInfos.slice(0, EXPERIENCE_DISPLAYED_COUNT)} />

      <Interactable onMouseIn={() => setLinkHovered(true)} onMouseOut={() => setLinkHovered(false)}>
        <StyledClosingLink
          color = {theme.palette.text.primary}
          href="./Nelson_Dong_resume.pdf"
          target="_blank"
          hovered = {linkHovered.toString()}
        >
          Checkout My Resume <StyledArrowRight hovered = {linkHovered.toString()}/>
        </StyledClosingLink>
      </Interactable>
    </Section>
  );
};

export default ExperienceSection;

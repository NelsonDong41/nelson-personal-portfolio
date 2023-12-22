import styled from "@emotion/styled";
import Section, { SectionHeader, SectionProps } from "../Section";
import ExperienceSectionContent from "./ExperienceSectionContent";
import {
  EXPERIENCE_DISPLAYED_COUNT,
  ExperienceCardInfos,
} from "@/lib/constants";
import { useEffect, useState } from "react";
import Interactable from "@/components/Util/Interactable";
import { useMediaQuery, useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Animations from "@/components/Util/Animations";

interface ExperienceSectionProps extends SectionProps {}

export const StyledClosingLink = styled(Link)<{
  hovered: string;
  current?: string;
}>`
  display: flex;
  align-items: center;
  margin: 2% 6%;
  text-decoration: none;
  color: ${(props) => props.color};
  gap: 0.5vw;
  text-decoration: ${(props) =>
    props.hovered === (props.current || "true") ? "underline" : "none"};
`;

const StyledArrowRight = styled(ArrowForward)<{ hovered: string }>`
  transition: all 400ms ease;
  transform: ${(props) => (props.hovered === "true" ? "translateX(100%)" : "")};
`;

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
  title
}: ExperienceSectionProps) => {
  const theme = useTheme();
  const [linkHovered, setLinkHovered] = useState(false);

  const animationControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    delay: 0.3,
  });

  // if the section is in view, start the animation for the section
  useEffect(() => {
    inView
      ? animationControls.start("visible")
      : animationControls.set("hiddenNotUp");
  }, [animationControls, inView]);

  return (
    <Section id={id} title={title}>
      <ExperienceSectionContent
        CardInfos={ExperienceCardInfos.slice(0, EXPERIENCE_DISPLAYED_COUNT)}
      />
      <motion.div
        variants={Animations.fadeInUp}
        ref={ref}
        initial="hidden"
        animate={animationControls}
      >
        <Interactable
          onMouseIn={() => setLinkHovered(true)}
          onMouseOut={() => setLinkHovered(false)}
        >
          <StyledClosingLink
            color={theme.palette.text.primary}
            href="./Nelson_Dong_resume.pdf"
            target="_blank"
            hovered={linkHovered.toString()}
          >
            Checkout My Resume{" "}
            <StyledArrowRight hovered={linkHovered.toString()} />
          </StyledClosingLink>
        </Interactable>
      </motion.div>
    </Section>
  );
};

export default ExperienceSection;

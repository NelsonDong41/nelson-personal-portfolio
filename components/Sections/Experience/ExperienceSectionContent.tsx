import { useMediaQuery, useTheme } from "@mui/material";
import { StyledH3 } from "../SectionTypography";
import ExperienceContentCard from "./ContentCard";
import { CardInfo } from "@/lib/types";
import { useEffect, useRef, useState } from "react";
import React from "react";
import styled from "@emotion/styled";
import Interactable from "@/components/Util/Interactable";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Animations from "@/components/Util/Animations";
import { motion } from "framer-motion";
interface ExperienceSectionContentProps {
  CardInfos: CardInfo[];
}

export const HoveredCardContext = React.createContext("");

const StyledExperienceCardStack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  overflow: hidden;
`;

const ExperienceSectionContent: React.FC<ExperienceSectionContentProps> = ({
  CardInfos,
}: ExperienceSectionContentProps) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("laptop"));

  const [hoveredId, setHoveredId] = useState("");

  const handleMouseIn = (event: React.MouseEvent) => {
    setHoveredId(event.currentTarget.id);
  };

  const handleMouseOut = () => {
    setHoveredId("");
  };

  const animationControls = useAnimation();
  const [ref, inView] = useInView({threshold: 0.2, delay: 0.3, triggerOnce: true});

  // if the section is in view, start the animation for the section
  useEffect(() => {
    inView
      ? animationControls.start("visible")
      : animationControls.set("hidden");
  }, [animationControls, inView]);

  return (
    <HoveredCardContext.Provider value={hoveredId}>
      <div style={{ height: "100%", width: "100%" }}>
        {isMobileView && <StyledH3>Experience</StyledH3>}
        <StyledExperienceCardStack
          variants={Animations.staggerContainer}
          ref = {ref}
          initial="hidden"
          animate={animationControls}
        >
          {CardInfos.map((currentCardInfo: CardInfo, index: number) => {
            return (
              <Interactable key = {index} scaleSize={!!currentCardInfo.link ? "2" : ""}>
                <ExperienceContentCard
                  cardInfo={currentCardInfo}
                  id={currentCardInfo.title}
                  onMouseIn={handleMouseIn}
                  onMouseOut={handleMouseOut}
                  onClick={(e) =>
                    e.nativeEvent.button === 0 &&
                    currentCardInfo.link &&
                    window.open(currentCardInfo.link || "404", "_blank")
                  }
                />
              </Interactable>
            );
          })}
        </StyledExperienceCardStack>
      </div>
    </HoveredCardContext.Provider>
  );
};

export default ExperienceSectionContent;

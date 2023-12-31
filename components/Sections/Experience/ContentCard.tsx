import { CardInfo } from "@/lib/types";
import styled from "@emotion/styled";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import {
  StyledBody2,
  StyledH3,
  StyledH6,
} from "../SectionTypography";
import React, {
  useContext,
  useEffect,
} from "react";
import { HoveredCardContext } from "./ExperienceSectionContent";
import { monthNames } from "@/lib/constants";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Animations from "@/components/Util/Animations";
import { MobileViewContext } from "@/pages/_app";

interface ContentCardProps {
  cardInfo: CardInfo;
  id: string;
  onMouseIn: (event: React.MouseEvent) => void;
  onMouseOut: (event: React.MouseEvent) => void;
  onClick: (event: React.MouseEvent) => void;
}

const StyledExperienceCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const StyledTechStack = styled(Stack)`
  flex-direction: row;
  flex-wrap: wrap;
  grid-area: 2 / 1 / 2 / 3;
  justify-content: center;
  margin: 5% 0 0 0;
`;

export const StyledTechBadge = styled(Paper)`
  width: min-content(50px);
  border-radius: 25px;
  padding: 1% 2%;
  margin: 1%;
  color: inherit;
`;

const ContentCard: React.FC<ContentCardProps> = ({
  cardInfo,
  id,
  onMouseIn,
  onMouseOut,
  onClick,
}: ContentCardProps) => {
  let { title, subtitle, description, dateStart, dateEnd, techStack, logo } =
    cardInfo;
  const theme = useTheme();
  const {isMobileView} = useContext(MobileViewContext);

  const StyledContentCard = styled(motion(Box))<{ hovered: string }>`
    padding: ${isMobileView ? "6% 3%" : "3%"};
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: ${theme.palette.background.paper};
    border-radius: 10px;
    transition: all 5s ease-out;
    box-shadow: 8px 10px 5px -1px rgba(0, 0, 0, 0.2);
    margin: 3% 4%;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${(props) => {
      if (props.hovered === "hovered") {
        return `
          transition: all 1s ease;
          &:hover {
            background-color: ${theme.palette.background.paper};
            box-shadow: 15px 15px 10px -1px ${theme.palette.grey[700]};
            transform: translate(-0.5%, -0.5%);
          }
          `;
      } else if (props.hovered === "notHovered") {
        return `
        transition: all 5s ease-out;
        filter: blur(3px);
        -webkit-filter: blur(3px);
        box-shadow: 0px 0px;
        background-color: ${theme.palette.background.default};
        `;
      }
    }};
  `;

  const currentHovered = useContext(HoveredCardContext);
  const isCurrentHovered = !!currentHovered
    ? currentHovered === id
      ? "hovered"
      : "notHovered"
    : "";
  const dateStartString = `${
    monthNames[dateStart?.getMonth()]
  } ${dateStart?.getFullYear()}`;

  let dateEndString;
  if (!dateEnd) {
    dateEndString = "";
  } else {
    if (dateEnd.toDateString() === new Date().toDateString())
      dateEndString = "Present";
    else
      dateEndString = `${
        monthNames[dateEnd.getMonth()]
      } ${dateEnd.getFullYear()}`;
  }

  const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const animationControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    delay: 0.3
  });

  // if the section is in view, start the animation for the section
  useEffect(() => {
    inView
      ? animationControls.start("visible")
      : animationControls.set("hiddenNotUp");
  }, [animationControls, inView]);


  return (
    <motion.div
      key={title}
      variants={Animations.fadeInUp}
      ref = {ref}
      initial="hidden"
      animate={animationControls}
    >
      <StyledContentCard
        onMouseEnter={onMouseIn}
        onMouseLeave={onMouseOut}
        onClick={onClick}
        id={id}
        hovered={isCurrentHovered}
      >
        <StyledLeft style={{ textAlign: "end", marginRight: "2vw" }}>
          <StyledBody2>
            {dateStartString}
            {!!dateEnd && (
              <>
                <br></br>-<br></br>
              </>
            )}
            {dateEndString}
          </StyledBody2>
        </StyledLeft>
        <StyledExperienceCardInfo>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <StyledH3>{title}</StyledH3>
              <StyledH6>{subtitle}</StyledH6>
            </div>
            {logo && <Image src={logo} alt="" height="40" width="40"></Image>}
          </div>
          <StyledBody2>{description}</StyledBody2>
        </StyledExperienceCardInfo>
        <StyledTechStack>
          {techStack?.map((tech) => {
            return (
              <StyledTechBadge key={title + tech} color="secondary">
                {tech}
              </StyledTechBadge>
            );
          })}
        </StyledTechStack>
      </StyledContentCard>
    </motion.div>
  );
};

export default ContentCard;

import {CardInfo} from "@/util/types";
import styled from "@emotion/styled";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import {
  StyledBody1,
  StyledBody2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "../SectionTypography";
import React, { MouseEvent, useContext, useState } from "react";
import { HoveredCardContext } from "./ExperienceSectionContent";
import { monthNames } from "@/util/constants";
import Interactable from "@/components/Util/Interactable";
import Image from "next/image";

interface ExperienceContentCardProps {
  cardInfo: CardInfo;
  id: string;
  onMouseIn: (event: React.MouseEvent) => void;
  onMouseOut: (event: React.MouseEvent) => void;
  onMouseUp: (event: React.MouseEvent) => void;
}

const StyledExperienceCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const StyledTechStack = styled(Stack)`
  flex-direction: row;
  flex-wrap: wrap;
  grid-area: 2 / 1 / 2 / 3;
  justify-content: center;
  margin: 5% 0 0 0;
`;

const StyledTechBadge = styled(Paper)`
  width: min-content(50px);
  border-radius: 25px;
  padding: 1% 2%;
  margin: 1%;
  color: inherit;
`;

const ExperienceContentCard: React.FC<ExperienceContentCardProps> = ({
  cardInfo,
  id,
  onMouseIn,
  onMouseOut,
  onMouseUp,
}: ExperienceContentCardProps) => {
  let {
    title,
    subtitle,
    description,
    dateStart,
    dateEnd,
    link,
    techStack,
    image,
    logo,
  } = cardInfo;
  const theme = useTheme();

  const StyledExperienceCard = styled(Box)<{ hovered: string }>`
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: ${theme.palette.background.paper};
    border-radius: 10px;
    transition: all 5s ease-out;
    box-shadow: 8px 10px 5px -1px rgba(0, 0, 0, 0.2);
    margin: 3%;
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
        filter: blur(4px);
        -webkit-filter: blur(4px);
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

  return (
    <Interactable scaleSize={2}>
      <StyledExperienceCard
        onMouseEnter={onMouseIn}
        onMouseLeave={onMouseOut}
        onMouseUp={onMouseUp}
        id={id}
        hovered={isCurrentHovered}
      >
        <StyledLeft>
          <StyledBody2>
            {dateStartString}
            {!!dateEnd && (
              <>
                {" "}
                -<br></br>
              </>
            )}
            {dateEndString}
          </StyledBody2>
        </StyledLeft>
        <StyledExperienceCardInfo>
          <div style={{display: "flex", justifyContent: 'space-between'}}>
            <div>
              <StyledH3>{title}</StyledH3>
              <StyledH6>{subtitle}</StyledH6>
            </div>
            {logo && <Image src={logo} alt = "" height="40" width="40"></Image>}
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
      </StyledExperienceCard>
    </Interactable>
  );
};

export default ExperienceContentCard;

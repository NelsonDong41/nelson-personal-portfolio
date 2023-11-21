import CardInfo from "@/util/types";
import styled from "@emotion/styled";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import {
  StyledBody1,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "../SectionTypography";
import React, { MouseEvent, useContext, useState } from "react";
import { HoveredCardContext } from "./ExperienceSectionContent";
import { monthNames } from "@/util/constants";

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
`;

const StyledTechStack = styled(Stack)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTechBadge = styled(Paper)`
  border-radius: 25px;
  padding: 1% 3%;
  margin: 1%;
  color: inherit;
`;

const StyledLeft = styled.div``;

const ExperienceContentCard: React.FC<ExperienceContentCardProps> = ({
  cardInfo,
  id,
  onMouseIn,
  onMouseOut,
  onMouseUp
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
  } = cardInfo;
  const theme = useTheme();

  const StyledExperienceCard = styled(Box)<{ hovered: string }>`
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: ${theme.palette.background.paper};
    border-radius: 50px;
    transition: all 5s ease-out;
    box-shadow: 8px 10px 5px -1px rgba(0, 0, 0, 0.2);
    ${(props) => {
      if (props.hovered === "hovered") {
        return `
          transition: all 0.6s ease;
          &:hover {
            background-color: ${theme.palette.background.paper};
            box-shadow: 15px 15px 10px -1px ${theme.palette.grey[700]};
          }
          `;
      }
      else if (props.hovered === "notHovered") {
        return `
        transition: all 5s ease-out;
        filter: blur(1px);
        -webkit-filter: blur(1px);
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

  return (
    <StyledExperienceCard
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
      onMouseUp={onMouseUp}
      id={id}
      hovered={isCurrentHovered}
    >
      <StyledLeft>
        {dateStartString}
        {!!dateEnd && (
          <>
            {" "}
            -<br></br>
          </>
        )}
        {dateEndString}
      </StyledLeft>
      <StyledExperienceCardInfo>
        <StyledH4>{title}</StyledH4>
        <StyledH5>{subtitle}</StyledH5>
        <StyledBody1>{description}</StyledBody1>
        <StyledTechStack>
          {techStack?.map((tech) => {
            return (
              <StyledTechBadge key={title + tech} color="secondary">
                {tech}
              </StyledTechBadge>
            );
          })}
        </StyledTechStack>
      </StyledExperienceCardInfo>
    </StyledExperienceCard>
  );
};

export default ExperienceContentCard;

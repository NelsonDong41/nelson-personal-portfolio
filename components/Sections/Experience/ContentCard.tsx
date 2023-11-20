import CardInfo from "@/util/types";
import styled from "@emotion/styled";
import { Box, Paper, Stack } from "@mui/material";
import { StyledBody1, StyledH3, StyledH4, StyledH5, StyledH6 } from "../SectionTypography";
import React, { MouseEvent, useContext, useState } from 'react';
import { HoveredCardContext } from "./ExperienceSectionContent";
import { monthNames } from "@/util/constants";

interface ExperienceContentCardProps {
  cardInfo: CardInfo;
  id: string;
  onMouseIn: (event: React.MouseEvent) => void
  onMouseOut: (event: React.MouseEvent) => void
}

const StyledExperienceCard = styled(Paper)<{hovered : string}>`
  padding: 5%;
  margin: 0 5%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-radius: 50px;
  box-shadow: 0;
  ${props => {
    if(props.hovered === "hovered"){
      return HoveredCSS
    }
    if(props.hovered === "notHovered"){
      return NotHoveredCSS
    }
  }};
`;

const HoveredCSS = {
  "backgroundColor": "rgba(176, 1, 1, 0.2)",
  "backdropFilter": "blur(20px) saturate(160%) contrast(45%) brightness(140%)",
  "WebkitBackdropFilter": "blur(20px) saturate(160%) contrast(45%) brightness(140%)",
}

const NotHoveredCSS = {
  "backgroundColor": "inherit",
  "filter": "blur(2px)",
  "WebkitFilter": "blur(2px)",
  // "backdropFilter": "blur(20px) saturate(160%) contrast(45%) brightness(140%)",
  // "WebkitBackdropFilter": "blur(20px) saturate(160%) contrast(45%) brightness(140%)"
}

const StyledExperienceCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTechStack = styled(Stack)`
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledTechBadge = styled(Paper)`
  border-radius: 25px;
  padding: 1% 3%;
  margin: 1%;
  color: inherit;
`

const StyledLeft = styled.div`
`


const ExperienceContentCard: React.FC<ExperienceContentCardProps> = ({
  cardInfo, id, onMouseIn, onMouseOut
}: ExperienceContentCardProps) => {
  let { title, subtitle, description, dateStart, dateEnd, link, techStack, image } = cardInfo;
  const currentHovered = useContext(HoveredCardContext)
  const isCurrentHovered = !!currentHovered ? (currentHovered === id ? "hovered" : "notHovered") : ""
  const dateStartString = `${monthNames[dateStart?.getMonth()]} ${dateStart?.getFullYear()}`;
  let dateEndString;
  if (!dateEnd) {
    dateEndString = ""
  } else {
    if(dateEnd.toDateString() === new Date().toDateString()) dateEndString = "Present"
    else dateEndString = `${monthNames[dateEnd.getMonth()]} ${dateEnd.getFullYear()}`
  }

  return <StyledExperienceCard onMouseEnter={onMouseIn} onMouseLeave={onMouseOut} id = {id} hovered = {isCurrentHovered} color='background'>
    <StyledLeft>
      {dateStartString}
      {!!dateEnd && <> -<br></br></>}
      {dateEndString}
    </StyledLeft>
    <StyledExperienceCardInfo>
      <StyledH4>{title}</StyledH4>
      <StyledH5>{subtitle}</StyledH5>
      <StyledBody1>{description}</StyledBody1>
      <StyledTechStack >
        {techStack?.map(tech => {
          return <StyledTechBadge key = {title + tech} color="secondary">{tech}</StyledTechBadge>
        })}
      </StyledTechStack>
    </StyledExperienceCardInfo>
  </StyledExperienceCard>;
};

export default ExperienceContentCard;

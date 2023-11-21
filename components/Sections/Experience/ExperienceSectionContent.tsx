import { Box, Paper, Stack, useMediaQuery, useTheme } from "@mui/material";
import { StyledH3, StyledLink, StyledBody1 } from "../SectionTypography";
import ExperienceContentCard from "./ContentCard";
import CardInfo from "@/util/types";
import { useState } from "react";
import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";


interface ExperienceSectionContentProps {
  CardInfos: CardInfo[]
}

export const HoveredCardContext = React.createContext("");


const StyledExperienceCardStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding: 5%;
`

const ExperienceSectionContent: React.FC<ExperienceSectionContentProps> = ({CardInfos} : ExperienceSectionContentProps) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("laptop"));
  const router = useRouter();

  const [hoveredId, setHoveredId] = useState("");

  const handleMouseIn = (event: React.MouseEvent) => {
    setHoveredId(event.currentTarget.id);
  };

  const handleMouseOut = () => {
    setHoveredId("");
  };

  return (
    <HoveredCardContext.Provider value={hoveredId}>
      <div style={{ height: "100%", width: "100%"}}>
        {isMobileView && <StyledH3>Experience</StyledH3>}
        <StyledExperienceCardStack>
          {CardInfos
            .map((currentCardInfo: CardInfo) => {
              return (
                <ExperienceContentCard
                  key={currentCardInfo.title}
                  cardInfo={currentCardInfo}
                  id={currentCardInfo.title}
                  onMouseIn={handleMouseIn}
                  onMouseOut={handleMouseOut}
                  onMouseUp={() => router.push(currentCardInfo.link || "404") }
                />
              );
            })}
        </StyledExperienceCardStack>
      </div>
    </HoveredCardContext.Provider>
  );
};

export default ExperienceSectionContent;

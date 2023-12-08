import { useMediaQuery, useTheme } from "@mui/material";
import { StyledH3 } from "../SectionTypography";
import ExperienceContentCard from "./ContentCard";
import {CardInfo} from "@/lib/types";
import { useState } from "react";
import React from "react";
import styled from "@emotion/styled";
import Interactable from "@/components/Util/Interactable";

interface ExperienceSectionContentProps {
  CardInfos: CardInfo[];
}

export const HoveredCardContext = React.createContext("");

const StyledExperienceCardStack = styled.div`
  display: flex;
  flex-direction: column;
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

  return (
    <HoveredCardContext.Provider value={hoveredId}>
      <div style={{ height: "100%", width: "100%" }}>
        {isMobileView && <StyledH3>Experience</StyledH3>}
        <StyledExperienceCardStack>
          {CardInfos.map((currentCardInfo: CardInfo) => {
            return (
              <Interactable key={currentCardInfo.title}>
                <ExperienceContentCard
                  key={currentCardInfo.title}
                  cardInfo={currentCardInfo}
                  id={currentCardInfo.title}
                  onMouseIn={handleMouseIn}
                  onMouseOut={handleMouseOut}
                  onMouseUp={(e) =>
                    e.nativeEvent.button === 0 &&
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

import { useMediaQuery, useTheme } from "@mui/material";
import { StyledH3 } from "../SectionTypography";
import ContentCard from "./ContentCard";
import { CardInfo } from "@/lib/types";
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

  return (
    <>
      <HoveredCardContext.Provider value={hoveredId}>
        <div style={{ width: "100%", overflow: "hidden"}}>
          {isMobileView && <StyledH3>Experience</StyledH3>}
          <StyledExperienceCardStack>
            {CardInfos.map((currentCardInfo: CardInfo, index: number) => {
              return (
                <Interactable
                  key={index}
                  scaleSize={!!currentCardInfo.link ? "2" : ""}
                >
                  <ContentCard
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
    </>
  );
};

export default ExperienceSectionContent;

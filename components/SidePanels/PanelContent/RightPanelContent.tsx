import { Box, Button, Grid, ToggleButton } from "@mui/material";
import styled from "@emotion/styled";
import AboutSection from "@/components/Sections/About/AboutSection";
import ColorThemeButton from "../../Buttons/ColorThemeButton";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection";

const StyledRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
`;

const RightPanelContent: React.FC = () => {
  return (
    <StyledRight>
        <AboutSection id="about-section"/>
        <ExperienceSection id="experience-section"/>
        <AboutSection id="section3-section"/>
        <AboutSection id="section4-section"/>
        <AboutSection id="section5-section"/>
        <ColorThemeButton />
    </StyledRight>
  );
};

export default RightPanelContent;

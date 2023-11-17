import { Box, Button, Grid, ToggleButton } from "@mui/material";
import styled from "@emotion/styled";
import AboutSection from "@/components/Sections/About/AboutSection";
import ColorThemeButton from "../../Buttons/ColorThemeButton";

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
        <AboutSection title="Section 2" id="section2-section"/>
        <AboutSection title="Section 3" id="section3-section"/>
        <AboutSection title="Section 4" id="section4-section"/>
        <AboutSection title="Section 5" id="section5-section"/>
        <ColorThemeButton />
    </StyledRight>
  );
};

export default RightPanelContent;

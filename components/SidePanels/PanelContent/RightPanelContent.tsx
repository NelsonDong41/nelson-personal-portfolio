import { Box, Button, Grid, ToggleButton } from "@mui/material";
import styled from "@emotion/styled";
import AboutSection from "@/components/Sections/About/AboutSection";
import ColorThemeButton from "../../Buttons/ColorThemeButton";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection";
import ProjectSection from "@/components/Sections/Project/ProjectSection";

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
        <ProjectSection id="project-section"/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </StyledRight>
  );
};

export default RightPanelContent;

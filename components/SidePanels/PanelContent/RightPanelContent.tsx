import styled from "@emotion/styled";
import AboutSection from "@/components/Sections/About/AboutSection";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection";
import ProjectSection from "@/components/Sections/Project/ProjectSection";
import ContactSection from "@/components/Sections/Contact/ContactSection";

const StyledRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
`;

const RightPanelContent: React.FC = () => {
  return (
    <StyledRight>
        <AboutSection id="about-section" title = "About"/>
        <ExperienceSection id="experiences-section" title = "Experiences"/>
        <ProjectSection id="projects-section" title = "Projects"/>
        <ContactSection id="contact-section"/>
    </StyledRight>
  );
};

export default RightPanelContent;

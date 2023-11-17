import { useMediaQuery, useTheme } from "@mui/material";
import { StyledH3, StyledLink, StyledBody1 } from "../SectionTypography";

const ExperienceSectionContent: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("laptop"));

  return (
    <div>
      {isMobileView && <StyledH3>Experience</StyledH3>}
      
    </div>
  );
};

export default ExperienceSectionContent;

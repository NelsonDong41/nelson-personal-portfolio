import { Paper, Stack, useMediaQuery, useTheme } from "@mui/material";
import { StyledH3, StyledLink, StyledBody1 } from "../SectionTypography";
import ExperienceContentCard from "./ExperienceContentCard";

const ExperienceSectionContent: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("laptop"));

  return (
    <div style={{"height": "100%", "width": "100%"}}>
      {isMobileView && <StyledH3>Experience</StyledH3>}
      <Stack spacing={2}>
        <ExperienceContentCard></ExperienceContentCard>
        <Paper>xs=4</Paper>
        <Paper>xs=4</Paper>
        <Paper>xs=8</Paper>
      </Stack>
    </div>
  );
};

export default ExperienceSectionContent;

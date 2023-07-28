import { Box, Button, Grid, ToggleButton } from "@mui/material";
import ContentCard from "../ContentCard/ContentCard";
import ColorThemeButton from "../Buttons/ColorThemeButton";

export default function RightPanelContent() {
  return (
    <Grid
      direction="column"
      justifyContent="center"
      alignItems="strech"
      container
      spacing={5}
    >
      <Grid item title="Section 1" id="section1id">
        <ContentCard />
      </Grid>
      <Grid item title="Section 2" id="section2id">
        We are in section 2
      </Grid>
      <Grid item title="Section 3" id="section3id">
        We are in section 3
      </Grid>
      <Grid item title="Section 4" id="section4id">
        We are in section 4
      </Grid>
      <Grid item title="Section 5" id="section5id">
        <ColorThemeButton />
      </Grid>
    </Grid>
  );
}

import styled from "@emotion/styled";
import { BreakPoints } from "@/styles/breakpoints";
import RightPanelContent from "../PanelContent/RightPanelContent";
import { Grid } from "@mui/material";

const StyledRight = styled(Grid)`
  width: 100%;
  padding-left: 50%;
  position: absolute;
  z-index: auto;
  @media (max-width: ${BreakPoints.laptop}px) {
    position: relative;
    padding-left: 0;
  }
`;

export default function RightPanel() {
  return (
    <StyledRight>
      <RightPanelContent />
    </StyledRight>
  );
}

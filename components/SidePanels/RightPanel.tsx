import styled from "@emotion/styled";
import { BreakPoints } from "@/styles/breakpoints";
import RightPanelContent from "./PanelContent/RightPanelContent";
import { Grid } from "@mui/material";

const StyledRight = styled(Grid)`
  width: 50vw;
  left: 50vw;
  padding-right: 10vw;
  position: absolute;
  z-index: auto;
  @media (max-width: ${BreakPoints.laptop}px) {
    position: relative;
    padding-right: 0;
    width: 100vw;
    left: 0;
  }
`;

const RightPanel: React.FC = () => {
  return (
    <StyledRight>
      <RightPanelContent />
    </StyledRight>
  );
};
export default RightPanel;

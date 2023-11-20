import styled from "@emotion/styled";
import { BreakPoints } from "@/styles/breakpoints";
import LeftPanelContent from "./PanelContent/LeftPanelContent";

const StyledLeft = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  padding-left: 10vw;
  @media (max-width: ${BreakPoints.laptop}px) {
    position: relative;
    width: 100%;
    padding-left: 0;
  }
`;

const LeftPanel : React.FC = () => {
  return (
    <StyledLeft>
      <LeftPanelContent />
    </StyledLeft>
  );
}

export default LeftPanel 
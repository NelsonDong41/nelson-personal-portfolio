import RightPanel from "./SidePanels/RightPanel";
import LeftPanel from "./SidePanels/LeftPanel";
import styled from "@emotion/styled";
import { BreakPoints } from "@/styles/breakpoints";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ScrollToTop from "./Buttons/ScrollToTop";

interface LayoutProps {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}

const StyledContainer = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${BreakPoints.laptop}px) {
    flex-direction: column;
  }
`;

export default function Layout(props: LayoutProps) {
  const { leftChildren, rightChildren } = props;
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("laptop"));
  return (
    <>
      <StyledContainer>
        <LeftPanel />
        <RightPanel />
      </StyledContainer>
      <ScrollToTop />
    </>
  );
}

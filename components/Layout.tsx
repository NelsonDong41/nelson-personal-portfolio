import styled from "@emotion/styled";
import { BreakPoints } from "@/styles/breakpoints";
import { Box } from "@mui/material";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const StyledContainer = styled(Box)`
  @media (max-width: ${BreakPoints.laptop}px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const Layout: React.FC<LayoutProps> = (props : LayoutProps) => {
  const children = props.children;
  return (
    <>
      <StyledContainer>
        {children}
      </StyledContainer>
      
    </>
  );
};

export default Layout;

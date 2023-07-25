import styled from "@emotion/styled";
import { StyledAside } from "./StyledAside";

interface RightPanelProps {
  children: React.ReactNode;
}

const StyledRight = styled.div`
  padding-left: 50vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function RightPanel(props: RightPanelProps) {
  const { children } = props;
  return (
    <StyledAside>
      <StyledRight>{children}</StyledRight>
    </StyledAside>
  );
}

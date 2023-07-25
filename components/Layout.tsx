import RightPanel from "./SidePanels/RightPanel";
import LeftPanel from "./SidePanels/LeftPanel";
import styled from "@emotion/styled";

interface LayoutProps {
    leftChildren: React.ReactNode;
    rightChildren: React.ReactNode; 
}

const StyledContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export default function Layout(props: LayoutProps ) {
    const {leftChildren, rightChildren} = props;
    return <StyledContainer>
        <LeftPanel>{leftChildren}</LeftPanel>
        <RightPanel>{rightChildren}</RightPanel>
    </StyledContainer>
}
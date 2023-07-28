import styled from "@emotion/styled";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import { BreakPoints } from "@/styles/breakpoints";
import LeftPanelContent from "../PanelContent/LeftPanelContent";


const StyledLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  @media (max-width: ${BreakPoints.laptop}px) {
    position: relative;
    width: 100%;
  }
`;

export default function LeftPanel() {
  return (
    <StyledLeft><LeftPanelContent /></StyledLeft>
  );
}

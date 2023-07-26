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
import { StyledAside } from "./StyledAside";

interface LeftPanelProps {
  children: React.ReactNode;
}

const StyledLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LeftPanel(props: LeftPanelProps) {
  const theme = useTheme();
  const { children } = props;
  return (
    <Drawer
      sx={{
        width: "50%",
        flexShrink: 1,
        "& .MuiDrawer-paper": {
          width: "50%",
          boxSizing: "border-box",
          border: 0,
          backgroundColor: theme.palette.background.default,
          alignItems: "flex-end",
          overflow:"hidden",
        },
        overflow:"hidden",
      }}
      variant="permanent"
      anchor="left"
      
    >
      <StyledLeft>{children}</StyledLeft>
    </Drawer>
  );
}

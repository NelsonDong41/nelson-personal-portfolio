import { toggleCursorHover } from "@/lib/cursorEffect";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import Interactable from "../Util/Interactable";

export default function ScrollToTop() {
  return (
    <Interactable>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          top: "92%",
          left: "95%",
          height: "5vh",
          width: "5vh",
        }}
        onClick={() => scroll.scrollToTop()}
        color = "success"
      >
        <KeyboardDoubleArrowUp />
      </Button>
    </Interactable>
  );
}

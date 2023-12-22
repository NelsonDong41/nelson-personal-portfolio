import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import {  Button } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import Interactable from "../Util/Interactable";

export default function ScrollToTop() {
  return (
    <Interactable>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          top: "92vh",
          left: "93vw",
          height: "5vh",
          width: "3vw",
        }}
        onClick={() => scroll.scrollToTop()}
        color = "success"
      >
        <KeyboardDoubleArrowUp />
      </Button>
    </Interactable>
  );
}

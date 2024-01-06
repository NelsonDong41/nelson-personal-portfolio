import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import Interactable from "../Util/Interactable";
import RemoveOverflow from "../Util/RemoveOverflow";

export default function ScrollToTop() {
  return (
    <Interactable>
      <RemoveOverflow>
        <Button
          variant="contained"
          sx={{
            position: "fixed",
            top: "92vh",
            left: "93vw",
          }}
          onClick={() => scroll.scrollToTop()}
          color="secondary"
        >
          <KeyboardDoubleArrowUp style={{ height: "4vh", width: "2vw" }} />
        </Button>
      </RemoveOverflow>
    </Interactable>
  );
}

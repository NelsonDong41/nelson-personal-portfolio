import { ColorModeContext } from "@/pages/_app";
import { Button } from "@mui/material";
import { useContext } from "react";
import Interactable from "../Util/Interactable";

export default function ColorThemeButton() {
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      
    </div>
    // <Button variant="contained" onClick={() => colorMode.toggleColorMode!()}>
    //   <Interactable>
    //     hello
    //   </Interactable>
    // </Button>
  );
}

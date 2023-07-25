import { ColorModeContext } from "@/pages/_app";
import { Button } from "@mui/material";
import { useContext } from "react";

export default function ColorThemeButton() {
  const colorMode = useContext(ColorModeContext);
  return (
    <Button variant="contained" onClick={() => colorMode.toggleColorMode!()}>
      hello
    </Button>
  );
}

import { ColorModeContext } from "@/pages/_app";
import { Button, useTheme } from "@mui/material";
import { useContext } from "react";
import Interactable from "../Util/Interactable";
import styled from "@emotion/styled";
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import { motion } from "framer-motion";
export default function ColorThemeButton() {
  const StyledColorButton = styled(motion(Button))`
    position: absolute;
    top: 2vh;
    left: 2vw;
    overflow-y: hidden;
  `;

  const RotateAndCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <>
      <StyledColorButton
        variant="contained"
        onClick={() => colorMode.toggleColorMode!()}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0]
        }}
        transition = {{ duration: 2 }}
        color = "success"
      >
        <motion.div>
          <Interactable>
            {theme.palette.mode === "dark" ? (
              <LocalFireDepartmentTwoToneIcon style={RotateAndCenter} />
            ) : (
              <AcUnitTwoToneIcon style={RotateAndCenter} />
            )}
          </Interactable>
        </motion.div>
      </StyledColorButton>
    </>
  );
}

import { Box } from "@mui/material";
import ColorThemeButton from "../Buttons/ColorThemeButton";
import SelectSectionsButton from "../Buttons/SelectSectionsButton";
import Signature from "../images/Signature";
import { sectionNames } from "@/util/constants";

export default function LeftPanelContent() {
  return (
    <Box>
      <Signature />
      <ColorThemeButton />
      <SelectSectionsButton sectionsList={sectionNames}></SelectSectionsButton>
    </Box>
  );
}

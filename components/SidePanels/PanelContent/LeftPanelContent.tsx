import { Box } from "@mui/material";
import ColorThemeButton from "../../Buttons/ColorThemeButton";
import SelectSectionsButton from "../../Buttons/SelectSectionsButton";
import Signature from "../../images/Signature";
import { sectionNames } from "@/util/constants";

const LeftPanelContent : React.FC = () => {
  return (
    <Box>
      <Signature />
      <ColorThemeButton />
      <SelectSectionsButton></SelectSectionsButton>
    </Box>
  );
}

export default LeftPanelContent
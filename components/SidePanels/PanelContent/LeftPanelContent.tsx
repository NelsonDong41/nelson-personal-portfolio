import ColorThemeButton from "../../Buttons/ColorThemeButton";
import SelectSectionsButton from "../../Buttons/SelectSectionsButton";
import Signature from "../../images/Signature";
import ProfilePic from "@/components/images/ProfilePic";
import styled from "@emotion/styled";
import Intro from "../../Sections/Intro/Intro";
import Socials from "@/components/Buttons/Socials";
import { useTheme } from "@mui/material";

const StyledLeftPanelContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 2vh;
`;

const LeftPanelContent: React.FC = () => {
  return (
    <>
      <ColorThemeButton />
      <StyledLeftPanelContent>
        <ProfilePic />
        <Signature />
        <Intro />
        <SelectSectionsButton />
        <Socials />
      </StyledLeftPanelContent>
    </>
  );
};

export default LeftPanelContent;

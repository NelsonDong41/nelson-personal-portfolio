import { useMediaQuery, useTheme } from "@mui/material";
import { StyledH3, StyledLink, StyledBody1 } from "../SectionTypography";
import styled from "@emotion/styled";
import Center from "@/components/Util/Center";

const StyledAboutSectionContent = styled.div`
  padding: 5%;
`;

const AboutSectionContent: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledAboutSectionContent>
      <StyledBody1>
        My first ever experience of coding was in middle school through this
        game called{" "}
        <StyledLink link="https://codecombat.com/">CodeCombat</StyledLink>. It
        is still to this day, the best game I have ever played (mainly because I
        was in middle school and kept winning from pure luck). I haven't stopped
        programming since then.
        <br />
        <br />
        Now, I have the privilege to be attending Northeastern University and
        have a co-op experience at{" "}
        <StyledLink link="https://www.woodmac.com/">
          Wood Mackenzie
        </StyledLink>{" "}
        and a previous internship experience at{" "}
        <StyledLink link="https://paynalli.com/">Paynalli Systems</StyledLink>.
        I also apply my skills to a non-profit organization called {""}
        <StyledLink link="https://HackBeanpot.com/">HackBeanpot</StyledLink>
        {""}
        <br />
        <br />
        While I am not developing, I like to Rock Climb, play volleyball, and
        watch shows and play games like Valorant and Terraria.
      </StyledBody1>
    </StyledAboutSectionContent>
  );
};

export default AboutSectionContent;

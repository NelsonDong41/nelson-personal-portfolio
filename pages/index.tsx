import Layout from "@/components/Layout";
import { Box, Button, Container } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "./_app";
import Signature from "@/components/images/Signature";
import styled from "@emotion/styled";
import { Link, animateScroll as scroll } from "react-scroll";
import ColorThemeButton from "@/components/Buttons/ColorThemeButton";
import SelectSectionsButton from "@/components/Buttons/SelectSection";

const Section = styled.div`
  height: 100vh;
`;

const sectionNames = ["Section1", "Section2", "Section3", "Section4"]

export default function HomePage() {
  const leftPanel = (
    <>
      <ColorThemeButton />
      <SelectSectionsButton sectionsList = {sectionNames}></SelectSectionsButton>
      <Signature />
    </>
  );
  const rightPanel = (
    <>
      <ColorThemeButton />
      <SelectSectionsButton sectionsList = {sectionNames}></SelectSectionsButton>
      <Signature />
      <Section title="Section 1" id="section1id">
        We are in section 1
      </Section>
      <Section title="Section 2" id="section2id">
        We are in section 2
      </Section>
      <Section title="Section 3" id="section3id">
        We are in section 3
      </Section>
      <Section title="Section 4" id="section4id">
        We are in section 4
      </Section>
      <Section title="Section 5" id="section5id">
        We are in section 5
      </Section>
    </>
  );
  return (
    <>
      <Layout leftChildren={leftPanel} rightChildren={rightPanel} />
    </>
  );
}

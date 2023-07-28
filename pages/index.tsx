import Layout from "@/components/Layout";
import { Box, Button, Container } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "./_app";
import Signature from "@/components/images/Signature";
import styled from "@emotion/styled";
import { animateScroll as scroll } from "react-scroll";
import ColorThemeButton from "@/components/Buttons/ColorThemeButton";
import SelectSectionsButton from "@/components/Buttons/SelectSectionsButton";
import LeftPanelContent from "@/components/PanelContent/LeftPanelContent";
import RightPanelContent from "@/components/PanelContent/RightPanelContent";


export default function HomePage() {

  return (
    <>
      <Layout leftChildren={LeftPanelContent()} rightChildren={RightPanelContent()} />
    </>
  );
}

import { Box, Button, Grid, Paper, Stack, useTheme } from "@mui/material";
import { Link } from "react-scroll";
import { sectionNames } from "@/util/constants";
import "./SelectSectionsButton.module.css";
import styled from "@emotion/styled";
import { useState } from "react";
import Interactable from "../Util/Interactable";
import { StyledH3 } from "../Sections/SectionTypography";

const StyledSpan = styled(Paper)`
  height: 1vh;
  width: 125px;
  display: inline-block;
  transition: all 500ms;
`;

const StyledStack = styled(Stack)`
  width: 100%;
  display: flex;
  gap: 2vh;
`;

export default function SelectSectionsButton() {
  const theme = useTheme()

  const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    color: inherit;
    opacity: 0.6;
    justify-content: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2vw;
    &.active {
      opacity: 1;
    }

    &.active > div {
      background-color: ${theme.palette.info.main};
      width: 150px;
    }
  `;

  return (
    <StyledStack>
      {sectionNames.map((sectionName) => {
        const cleanedID = sectionName.toLowerCase().trim() + "-section";
        return (
          <Interactable key={cleanedID}>
            <NavLinks
              key={cleanedID}
              activeClass="active"
              to={cleanedID}
              smooth={true}
              offset={-100}
              duration={500}
              spy={true}
            >
              <StyledSpan />
              <StyledH3>{sectionName}</StyledH3>
              <StyledSpan />
            </NavLinks>
          </Interactable>
        );
      })}
    </StyledStack>
  );
}

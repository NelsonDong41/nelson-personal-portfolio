import { Box, Button } from "@mui/material";
import { Link } from "react-scroll";
import { sectionNames } from "@/util/constants";
import './SelectSectionsButton.module.css'
import styled from "@emotion/styled";
import { useState } from "react";

const NavLinks = styled(Link)`
  
  &.active {
    background-color: blue;
  }
  
  &.active > div {
    background-color: red;
    width: 100px;
  }
`;

const StyledSpan = styled.div`
  height: 5px;
  width: 50px;
  color: black;
  background-color: black;
`;

export default function SelectSectionsButton() {

  return (
    <Box>
      {sectionNames.map((sectionName) => {
        const cleanedID = sectionName.toLowerCase().trim() + "-section"
        return (
          <NavLinks
            key = {cleanedID}
            activeClass="active"
            to={cleanedID}
            smooth={true}
            offset={-100}
            duration={500}
            spy = {true}
          >
            {sectionName}
            <StyledSpan />
          </NavLinks>
      )})}
    </Box>
  );
}

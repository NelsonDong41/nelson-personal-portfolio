import ProjectTable from "@/components/ProjectTable/ProjectTable";
import { StyledH1, StyledH3 } from "@/components/Sections/SectionTypography";
import Interactable from "@/components/Util/Interactable";
import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const StyledArrowBack = styled(ArrowBack)<{ hovered: string }>`
  position: fixed;
  top: 5vh;
  left: 1vw;
  height: 7%;
  width: 7%;
  transition: all 400ms ease;
  transform: ${(props) => (props.hovered === "true" ? "translateX(-10%)" : "")};
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
`;


const AllProjectsPage: React.FC = () => {
  const [goBackHovered, setGoBackHovered] = useState(false);
  const router = useRouter();

  return (
    <StyledContainer>
      <Interactable
        onMouseIn={() => setGoBackHovered(true)}
        onMouseOut={() => setGoBackHovered(false)}
      >
        <StyledArrowBack
          hovered={goBackHovered.toString()}
          onClick={() => router.push("/")}
        />
      </Interactable>
      <StyledH1> My Projects</StyledH1>
      <ProjectTable />
    </StyledContainer>
  );
};

export default AllProjectsPage;

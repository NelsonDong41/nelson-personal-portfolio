import styled from "@emotion/styled";
import { Element } from "react-scroll";
import RemoveOverflow from "../Util/RemoveOverflow";
import { useContext } from "react";
import { MobileViewContext } from "@/pages/_app";
import Center from "../Util/Center";
import { StyledH1 } from "./SectionTypography";
import { Divider } from "@mui/material";

export interface SectionProps {
  id: string;
  title?: string;
  children?: React.ReactElement | React.ReactElement[];
}
export interface SectionHeaderProps {
  children: string;
}

const StyledSection = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5vh 0;
  height: fit-content;
`;

const Section: React.FC<SectionProps> = ({
  id,
  children,
  title,
}: SectionProps) => {
  return (
    <StyledSection name={id}>
      {title && <SectionHeader>{title}</SectionHeader>}
        <Divider component="div" style={{ alignSelf: "center", width: "75vw", boxShadow: "0 0 5px" }}/>
      <RemoveOverflow>{children}</RemoveOverflow>
    </StyledSection>
  );
};

export default Section;

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
}: SectionHeaderProps) => {
  const { isMobileView } = useContext(MobileViewContext);

  return (
    <div style={{marginBottom: "3vh"}}>
      {isMobileView && (
        <Center>
          <StyledH1>{children}</StyledH1>
        </Center>
      )}
    </div>
  );
};

import styled from "@emotion/styled";
import { Element } from "react-scroll";
import RemoveOverflow from "../Util/RemoveOverflow";

export interface SectionProps {
  id: string;
  children: React.ReactElement | React.ReactElement[];
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
}: SectionProps) => {
  return (
    <StyledSection name = {id}>
      <RemoveOverflow>
        {children}
      </RemoveOverflow>
    </StyledSection>
  );
};

export default Section;
import styled from "@emotion/styled";
import { Element } from "react-scroll";

export interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

const StyledSection = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh 0;
`;

const Section: React.FC<SectionProps> = ({
  id,
  children,
}: SectionProps) => {
  return (
    <StyledSection name = {id}>
      {children}
    </StyledSection>
  );
};

export default Section;
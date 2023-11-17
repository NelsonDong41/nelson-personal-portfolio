import styled from "@emotion/styled";

export interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

const StyledSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const Section: React.FC<SectionProps> = ({
  id,
  children,
}: SectionProps) => {
  return (
    <StyledSection id={id}>
      {children}
    </StyledSection>
  );
};

export default Section;
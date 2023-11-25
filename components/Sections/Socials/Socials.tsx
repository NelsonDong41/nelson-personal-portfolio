import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import styled from '@emotion/styled';
import { Stack } from '@mui/material';


const StyledStack = styled(Stack)`
    flex-direction: row;
`;

const Socials = () => {
  return <StyledStack>
    <LinkedInIcon></LinkedInIcon>
    <GitHubIcon></GitHubIcon>
    <EmailIcon></EmailIcon>
  </StyledStack>
}

export default Socials;
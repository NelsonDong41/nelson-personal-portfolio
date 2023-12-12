import { Link, Typography } from "@mui/material";
import React from "react";
import { palette, PaletteProps } from "@mui/system";
import styled from "@emotion/styled";
import { toggleCursorHover } from "@/lib/cursorEffect";

interface StyledTypographyProps {
  children?: React.ReactNode;
  link?: string;
  style?: any;
  target?: any;
}

const StyledH1: React.FC<StyledTypographyProps> = ({
  children,
}: StyledTypographyProps) => {
  return (
    <Typography variant="h1" sx={{ overflow: "hidden" }}>
      {children}
    </Typography>
  );
};

const StyledH3: React.FC<StyledTypographyProps> = ({
  children,
}: StyledTypographyProps) => {
  return (
    <Typography variant="h3" sx={{ overflow: "hidden" }}>
      {children}
    </Typography>
  );
};

const StyledH4: React.FC<StyledTypographyProps> = ({
  children,
}: StyledTypographyProps) => {
  return (
    <Typography variant="h4" sx={{ overflow: "hidden" }}>
      {children}
    </Typography>
  );
};

const StyledH5: React.FC<StyledTypographyProps> = ({
  children,
}: StyledTypographyProps) => {
  return (
    <Typography variant="h5" sx={{ overflow: "hidden" }}>
      {children}
    </Typography>
  );
};

const StyledH6: React.FC<StyledTypographyProps> = ({
  children,
}: StyledTypographyProps) => {
  return (
    <Typography variant="h6" sx={{ overflow: "hidden" }}>
      {children}
    </Typography>
  );
};

const StyledBody1: React.FC<StyledTypographyProps> = ({
  children,
}: StyledTypographyProps) => {
  return <Typography variant="body1">{children}</Typography>;
};

const StyledBody2: React.FC<StyledTypographyProps> = ({
  children,
}: StyledTypographyProps) => {
  return <Typography variant="body2">{children}</Typography>;
};

const StyledLinkBase = styled(Link)<PaletteProps & StyledTypographyProps>`
  ${palette};
`;

export default function StyledLink({
  link,
  children,
}: PaletteProps & StyledTypographyProps) {
  return (
    <span
      onMouseEnter={() => {
        toggleCursorHover(true, 1);
      }}
      onMouseLeave={() => {
        toggleCursorHover(false, 1);
      }}
      style={{ padding: 0, lineHeight: 'normal' }}
    >
      <StyledLinkBase
        href={link || "404"}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        {children}
      </StyledLinkBase>
    </span>
  );
}

export {StyledH1, StyledH3, StyledBody1, StyledBody2, StyledLink, StyledH4, StyledH5, StyledH6 };

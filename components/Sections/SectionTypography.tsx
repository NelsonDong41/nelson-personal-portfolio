import { MenuItem, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

interface StyledTypographyProps {
  children?: React.ReactNode;
  link?: string;
}

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

const StyledLink: React.FC<StyledTypographyProps> = ({
  link,
  children,
}: StyledTypographyProps) => {
  return (
    <Link
      href={link || "404"}
      style={{ textDecoration: "none" }}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export { StyledH3, StyledBody1, StyledLink, StyledH4, StyledH5, StyledH6 };

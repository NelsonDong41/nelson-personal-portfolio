import React from "react";

interface RemoveOverflowProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function RemoveOverflow({ children }: RemoveOverflowProps) {
  return <div style={{ overflow: "hidden" }}>{children}</div>;
}

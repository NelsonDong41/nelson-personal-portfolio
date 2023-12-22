import React from "react";


interface CenterProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function Center({children} : CenterProps) {
  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%", width: "100%"}}>
    {children}
  </div>
}
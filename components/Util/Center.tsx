import React from "react";


interface CenterProps {
  children: React.ReactElement;
}

export default function Center({children} : CenterProps) {
  return <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%", width: "100%"}}>
    {children}
  </div>
}
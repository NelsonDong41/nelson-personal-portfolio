import React from "react";


interface CentereProps {
  children: React.ReactNode;
}

export default function Center({children} : CentereProps) {
  return <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
    {children}
  </div>
}
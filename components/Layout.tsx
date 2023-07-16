import { AppProps } from "next/app";
import { ReactComponentElement } from "react";

export interface LayoutProps {
    children: React.ReactNode;
  }

export default function Layout(props: LayoutProps ) {
    const {children} = props;
    return <div>
        <h1>AHHHHHHHHHH</h1>
        {children}
    </div>
}
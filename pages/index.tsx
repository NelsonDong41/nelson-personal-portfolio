import ScrollToTop from "@/components/Buttons/ScrollToTop";
import Layout from "@/components/Layout";
import LeftPanel from "@/components/SidePanels/LeftPanel";
import RightPanel from "@/components/SidePanels/RightPanel";
import { MobileViewContext } from "./_app";
import { useContext } from "react";

const HomePage: React.FC = () => {
  const {isMobileView} = useContext(MobileViewContext);
  return (
    <>
      <Layout>
        <>
          <LeftPanel />
          <RightPanel />
          {!isMobileView && <ScrollToTop />}
        </>
      </Layout>
    </>
  );
};

export default HomePage;

import ScrollToTop from "@/components/Buttons/ScrollToTop";
import Layout from "@/components/Layout";
import LeftPanel from "@/components/SidePanels/LeftPanel";
import RightPanel from "@/components/SidePanels/RightPanel";

const HomePage: React.FC = () => {
  return (
    <>
      <Layout>
        <LeftPanel />
        <RightPanel />
      </Layout>
      <ScrollToTop />
    </>
  );
};

export default HomePage;

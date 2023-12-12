import ScrollToTop from "@/components/Buttons/ScrollToTop";
import Layout from "@/components/Layout";
import LeftPanel from "@/components/SidePanels/LeftPanel";
import RightPanel from "@/components/SidePanels/RightPanel";
import { Toaster } from "sonner";

const HomePage: React.FC = () => {
  return (
    <>
      <Layout>
        <LeftPanel />
        <RightPanel />
      </Layout>
      <ScrollToTop />
      <Toaster
        richColors
        closeButton
        position="bottom-right"
      />
    </>
  );
};

export default HomePage;

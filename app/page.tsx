import FullwidthBanner from "./components/FullwidthBanner";
import MarginWrapperComponent from "./components/MarginWrapperComponent";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <>
      <MarginWrapperComponent>
        <FullwidthBanner />
      </MarginWrapperComponent>
      <ServiceSection />
      <ProjectSection />
    </>
  );
}

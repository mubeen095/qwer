import Layout from "../components/Infosys/Layout/Layout.js";
import Banners from "../components/Infosys/Bannerrs/Banner";
import PartE from "../components/Infosys/PartE/PartE";
import PartF from "../components/Infosys/PartF/PartF";
import Course from "../components/Infosys/Course/Course";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Garage | Our Courses" />

      <Layout>
        <Banners />
        <PartE />
        <PartF />
        <Course />
      </Layout>
    </>
  );
}

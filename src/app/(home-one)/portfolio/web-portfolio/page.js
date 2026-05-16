import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Projects from "@/components/home-one/projects";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import SinglePortfolioDetails from "@/mock-data/singlePortfolioDetails";
const data = SinglePortfolioDetails.webAndSoftware;
function SinglePortfolio() {
  return (
    <>
      <BreadCrumb title={data?.title} isNested={true} nestedTitle="Portfolio" />
      <PortfolioDetails data={data} />
      <AutoSlider />
      <Projects />
    </>
  );
}

export const metadata = {
  title: "Web Development Portfolio | Website Design Projects",
  description:
    "Explore The 8 Verse web development portfolio featuring high-performance websites, web apps, and scalable digital solutions built for growth and user experience.",
};

export default SinglePortfolio;

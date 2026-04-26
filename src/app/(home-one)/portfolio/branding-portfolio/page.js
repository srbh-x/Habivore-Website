import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Projects from "@/components/home-one/projects";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import SinglePortfolioDetails from "@/mock-data/singlePortfolioDetails";
const data = SinglePortfolioDetails.brandingAndDesign;
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
  title: "Branding Portfolio | Brand Identity Design Projects",
  description:
    "Explore The 8 Verse branding portfolio featuring logo design, brand identity systems, and strategic branding projects built to help businesses stand out and scale.",
};

export default SinglePortfolio;

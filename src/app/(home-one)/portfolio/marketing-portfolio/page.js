import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Projects from "@/components/home-one/projects";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import SinglePortfolioDetails from "@/mock-data/singlePortfolioDetails";
const data = SinglePortfolioDetails.marketingAndGrowth;
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
  title: "Marketing Portfolio | SEO & Growth Campaign Case Studies",
  description:
    "Discover The 8 Verse marketing portfolio featuring SEO, paid ads, and growth campaigns designed to drive traffic, leads, and measurable business results.",
};

export default SinglePortfolio;

import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Projects from "@/components/home-one/projects";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import SinglePortfolioDetails from "@/mock-data/singlePortfolioDetails";
const data = SinglePortfolioDetails.mediaAndProduction;
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

export default SinglePortfolio;

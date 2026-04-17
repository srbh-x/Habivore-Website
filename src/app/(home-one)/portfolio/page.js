import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioList from "@/components/portfolio/one/PortfolioList";

function PortfolioOneColumn() {
  return (
    <>
      <BreadCrumb title="Portfolio" />
      <PortfolioList />
    </>
  );
}

export default PortfolioOneColumn;

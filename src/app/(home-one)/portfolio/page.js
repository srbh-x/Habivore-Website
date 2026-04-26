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

export const metadata = {
  title: "Our Work & Case Studies",
  description:
    "Explore The 8 Verse portfolio showcasing branding, web development, marketing, and media projects that delivered real business growth.",
};

export default PortfolioOneColumn;

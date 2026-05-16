import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Faq from "@/components/home-one/faq";
import Testimonial from "@/components/home-one/testimonial";
import ServiceDetails from "@/components/service/ServiceDetails";

function MarketingAndGrowth() {
  return (
    <>
      <BreadCrumb
        title="Branding and Growth"
        isNested={true}
        nestedTitle="Service"
      />
      <ServiceDetails type="marketing-growth" />
      {/* <Testimonial /> */}
      <AutoSlider />
      <Faq />
    </>
  );
}

export const metadata = {
  title: "Digital Marketing & Growth Services",
  description:
    "Drive traffic, leads, and revenue with SEO, paid ads, and data-driven marketing strategies designed for sustainable growth.",
};

export default MarketingAndGrowth;

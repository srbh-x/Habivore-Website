import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Faq from "@/components/home-one/faq";
import Testimonial from "@/components/home-one/testimonial";
import ServiceDetails from "@/components/service/ServiceDetails";

function MediaAndProduction() {
  return (
    <>
      <BreadCrumb
        title="Media and Prodiction"
        isNested={true}
        nestedTitle="Service"
      />
      <ServiceDetails type="media-production" />
      {/* <Testimonial /> */}
      <AutoSlider />
      <Faq />
    </>
  );
}

export const metadata = {
  title: "Media Production & Content Services",
  description:
    "High-impact video, photography, and content production that builds trust, captures attention, and drives engagement.",
};

export default MediaAndProduction;

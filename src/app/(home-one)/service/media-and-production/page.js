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

export default MediaAndProduction;

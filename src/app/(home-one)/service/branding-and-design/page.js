import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Faq from "@/components/home-one/faq";
import Testimonial from "@/components/home-one/testimonial";
import ServiceDetails from "@/components/service/ServiceDetails";

function BrandingAndDesign() {
  return (
    <>
      <BreadCrumb
        title="Branding and Design"
        isNested={true}
        nestedTitle="Service"
      />
      <ServiceDetails type="branding-design" />
      {/* <Testimonial /> */}
      <AutoSlider />
      <Faq />
    </>
  );
}

export default BrandingAndDesign;

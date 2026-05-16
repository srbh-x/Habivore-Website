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

export const metadata = {
  title: "Branding & Design Services",
  description:
    "Build a powerful brand identity with logo design, visual systems, and brand strategy tailored to help your business stand out and scale.",
};

export default BrandingAndDesign;

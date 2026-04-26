import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home-one/faq";
import AutoSlider from "@/components/home-one/auto-slider";
import ServiceDetails from "@/components/service/ServiceDetails";

function WebAndSoftware() {
  return (
    <>
      <BreadCrumb
        title="Web And Software"
        isNested={true}
        nestedTitle="Service"
      />
      <ServiceDetails type="web-software" />
      <AutoSlider />
      <Faq />
    </>
  );
}

export const metadata = {
  title: "Web Development & Software Solutions",
  description:
    "Custom websites, web apps, and scalable software solutions built for performance, growth, and seamless user experience.",
};

export default WebAndSoftware;

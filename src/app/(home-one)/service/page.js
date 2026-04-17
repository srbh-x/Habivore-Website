import BreadCrumb from "@/components/common/Breadcrumb";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import AutoSlider from "@/components/home-one/auto-slider";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import Faq from "@/components/home-one/faq";
import { serviceCardData } from "@/mock-data/serviceCardData";

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Service" />
      <Services services={serviceCardData} isServiceButton={true} />
      <AutoSlider />
      <WhyChooseUs />
      <AutoSlider />
      {/* <TwoColumnFaq /> */}
      <Faq />
    </>
  );
}

export default ServicePage;

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
      <Services services={serviceCardData} showViewPortfolioButton={true}/>
      <AutoSlider />
      <WhyChooseUs />
      <AutoSlider />
      {/* <TwoColumnFaq /> */}
      <Faq />
    </>
  );
}

export const metadata = {
  title: "Our Services",
  description:
    "Explore branding, web development, SEO, marketing, and media production services designed to help businesses scale faster with The 8 Verse.",
};

export default ServicePage;

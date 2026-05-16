import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import Faq from "@/components/home-one/faq";
import { serviceCardData } from "@/mock-data/serviceCardData";

export default function HomeOne() {
  return (
    <>
      <Hero />
      <Services services={serviceCardData} showViewPortfolioButton={true} />
      <About />
      <Projects />
      <WhyChooseUs />
      {/* <Testimonial /> */}
      <AutoSlider />
      <Faq />
      {/* <Teams teams={teamsData} /> */}
    </>
  );
}

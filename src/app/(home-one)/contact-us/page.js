import BreadCrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import AutoSlider from "@/components/home-one/auto-slider";
import Faq from "@/components/home-one/faq";
function ContactUs() {
  const location = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <ContactForm />
      <AutoSlider />
      {/* <ContactInfo /> */}
      {/* <GoogleMap location={location} /> */}
      {/* <TwoColumnFaq /> */}
      <Faq />
    </>
  );
}

export default ContactUs;

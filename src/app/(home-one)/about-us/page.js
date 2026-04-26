import Story from "@/components/about/story";
import BreadCrumb from "@/components/common/Breadcrumb";
import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Teams from "@/components/home-one/teams";

import Team1Img from "../../../public/images/team/team1.png";
import Team2Img from "../../../public/images/team/team2.png";
import Team3Img from "../../../public/images/team/team3.png";
import Team4Img from "../../../public/images/team/team4.png";

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Andrew Mark",
    designation: "Creative Director",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Jack Taylor",
    designation: "Senior Designer",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Martine Joy",
    designation: "Project Manager",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Adam Straw",
    designation: "Web Developer",
    img: Team4Img,
  },
];

function AboutUs() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <Story />
      <AutoSlider />
      <About />
      {/* <Teams teams={teamsData} /> */}
    </>
  );
}

export const metadata = {
  title: "About Us",
  description:
    "Learn how The 8 Verse helps startups and businesses grow through branding, technology, marketing, and media with a unified, results-driven approach.",
};

export default AboutUs;

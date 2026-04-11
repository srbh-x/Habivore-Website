import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Teams from "@/components/home-one/teams";
import Testimonial from "@/components/home-one/testimonial";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import Faq from "@/components/home-one/faq";

// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Branding & Design",
		description:
			"Logo design, brand identity, packaging, and visual systems that make your business stand out.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Web & Tech",
		description:
			"High-performance websites, web apps, and digital platforms built for growth and scalability.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Marketing & Growth",
		description:
			"Video production, photography, and content creation that captures attention and drives engagement.",
		icon: "icon-data-analysis-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Media & Production",
		description:
			"SEO, digital marketing, and strategies designed to bring traffic, leads, and conversions.",
		icon: "icon-data-analysis-1",
	},
];
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
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} showAllServices={false} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Faq />
			<Teams teams={teamsData} />
		</>
	);
}

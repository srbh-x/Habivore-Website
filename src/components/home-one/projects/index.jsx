"use client";
import Image from "next/image";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Img from "../../../public/images/v1/project1.png";
import Project2Img from "../../../public/images/v1/project2.png";
import Project3Img from "../../../public/images/v1/project3.png";
import Project4Img from "../../../public/images/v1/project4.png";
import Star2Img from "../../../public/images/v1/star2.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Branding and Design",
		description: "We build bold brand identities that stand out and scale",
		img: Project1Img,
		link: "/portfolio/branding-portfolio",
	},
	{
		id: crypto.randomUUID(),
		title: "Web and Software",
		description: "We build the technology your business needs to operate, scale, and grow",
		img: Project2Img,
		link: "/portfolio/web-portfolio",
	},
	{
		id: crypto.randomUUID(),
		title: "Marketing and Growth",
		description: "We drive visibility, leads, and revenue through smart strategies",
		img: Project3Img,
		link: "/portfolio/marketing-portfolio",
	},
	{
		id: crypto.randomUUID(),
		title: "Media and Production",
		description: "We create high-impact content that captures attention and converts",
		img: Project4Img,
		link: "/portfolio/media-portfolio",
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Our work
						<span className="aximo-title-animation">
							speaks for itself
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;

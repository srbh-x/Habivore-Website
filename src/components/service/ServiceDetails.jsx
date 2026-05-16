import Image from "next/image";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";
// import services from "@/data/services/serviceDetailsData";
import serviceDatas from "@/mock-data/serviceDatas";

function ServiceDetails({ type }) {
	const data = serviceDatas[type];

	// fallback safety
	if (!data) {
		return <div className="container">Service not found</div>;
	}

	const { image, starIcon, title, description, sections } = data;

	return (
		<div className="section aximo-section-padding2 pb-0">
			<div className="container">
				<div className="aximo-service-details-wrap">

					{/* Image */}
					<FadeInUp className="aximo-service-details-thumb">
						<Image src={image} alt="Service image" sizes="100vw" />
					</FadeInUp>

					{/* Title + Description */}
					<div className="row">
						<div className="col-lg-8">
							<div className="aximo-default-content">
								<h2>
									<span className="aximo-title-animation">
										{title.line1}
										<span className="aximo-title-icon">
											<Image src={starIcon} alt="star" />
										</span>
									</span>
									{title.line2}
								</h2>

								{description.map((para, index) => (
									<p key={index}>{para}</p>
								))}
							</div>
						</div>
					</div>

					{/* Sections */}
					<div className="row">
						{sections.map((section, index) => (
							<div className="col-lg-6" key={index}>
								<div className="aximo-user-interface">
									<h3>{section.title}</h3>
									<ul>
										{section.points.map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>

					{/* Extra Component */}
					<div className="aximo-faq-wrap">
						<WorkingApproach type={type} />
					</div>

				</div>
			</div>
		</div>
	);
}

export default ServiceDetails;
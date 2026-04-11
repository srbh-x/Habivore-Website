import FadeInUp from "@/components/animation/FadeInUp";
import FaqAccordion from "./FaqAccordion";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";

function Faq() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Everything You
						<span className="aximo-title-animation">
							Need to Know
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="accordion aximo-accordion-wrap5" id="aximo-accordion">
					<FadeInUp>
						<FaqAccordion />
					</FadeInUp>
				</div>
			</div>
		</div>
	);
}

export default Faq;

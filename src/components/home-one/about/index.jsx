import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import AboutCounter from "./AboutCounter";
import Video from "./Video";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									Results Built on
									<span className="aximo-title-icon">
										<Image src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								Experience
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								We work as an extension of your team understanding your goals, your audience, and your market. Then bring together branding, technology, marketing, and media to deliver results that move the needle.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

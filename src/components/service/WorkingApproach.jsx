import Image from "next/image";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import approachDatas from "@/mock-data/approachDatas";

function WorkingApproach({ type }) {
	const data = approachDatas[type];

	if (!data) return null;

	const { image, intro, steps } = data;

	return (
		<div className="row">
			<div className="col-lg-5 offset-lg-1 order-lg-1">
				<FadeInRight className="aximo-service-details-thumb2">
					<Image src={image} alt="service" sizes="100vw" />
				</FadeInRight>
			</div>

			<div className="col-lg-6">
				<div className="aximo-default-content">
					<h2>
						<span className="aximo-title-animation">
							Our Approach
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="star" />
							</span>
						</span>
					</h2>

					<p>{intro}</p>
				</div>

				<div className="aximo-our-approach">
					{steps.map((item) => (
						<div className="aximo-iconbox-wrap5" key={item.id}>
							<div className="aximo-iconbox-icon5">
								<i className={item.icon}></i>
							</div>

							<div className="aximo-iconbox-data5">
								<h3>{item.title}:</h3>
								<div className="aximo-user-interface">
									<ul>
										<li>{item.description}</li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WorkingApproach;
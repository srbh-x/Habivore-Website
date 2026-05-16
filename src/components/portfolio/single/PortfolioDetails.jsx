import FadeInRight from "@/components/animation/FadeInRight";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Single1Img from "../../../public/images/portfolio/p_single.png";
import Single2Img from "../../../public/images/portfolio/p_single2.png";
import Star2Img from "../../../public/images/v1/star2.png";
import SinglePortfolioDetails from "@/mock-data/singlePortfolioDetails";

export default function PortfolioDetails({ data }) {

	if (!data) return <div>Portfolio not found</div>;

	const { image1, image2, info, intro, steps } = data;

	return (
		<div className="aximo-project-single-section">
			<div className="container">

				<FadeInUp className="aximo-project-single-thumb">
					<Image src={image1} alt="Single" />
				</FadeInUp>

				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Clients from :</h3>
						<h3>{info.client}</h3>
					</div>
				</div>

				<div className="aximo-project-single-wrap">
					<div className="row">

						<div className="col-lg-4 order-lg-2">
							<FadeInRight className="aximo-project-single-thumb2">
								<Image src={image2} alt="Single 2" sizes="100vw" />
							</FadeInRight>
						</div>

						<div className="col-lg-8">
							<div className="aximo-default-content m-right-gap">

								<h2>
									How we initiate and
									<span className="aximo-title-animation">
										resolve the project
										<span className="aximo-title-icon">
											<Image src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>

								<p>{intro}</p>

								<div className="aximo-resolve-project-wrap">
									{steps.map((item, index) => (
										<div key={item.id} className="aximo-resolve-project-item">
											<h3>
												{index + 1}. {item.title}:
											</h3>
											<p>{item.text}</p>
										</div>
									))}
								</div>

							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
	);
}
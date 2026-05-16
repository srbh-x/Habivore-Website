import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Portfolio2Img from "../../../public/images/portfolio/p_10.png";
import Portfolio3Img from "../../../public/images/portfolio/p_11.png";
import Portfolio1Img from "../../../public/images/portfolio/p_9.png";
import Star2Img from "../../../public/images/v1/star2.png";
import PortfolioCard from "./PortfolioCard";
import { portfolioListData } from "@/mock-data/portfoliListData";

function PortfolioList() {
	return (
		<div className="aximo-project-one-column">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative projects
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="star" />
							</span>
						</span>
					</h2>
				</div>
				{portfolioListData.map((portfolio, index) => (
					<FadeInStagger className="aximo-project-wrap3" key={portfolio.id} index={index}>
						<PortfolioCard portfolio={portfolio} />
					</FadeInStagger>
				))}
			</div>
		</div>
	);
}

export default PortfolioList;

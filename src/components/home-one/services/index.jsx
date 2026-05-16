import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import ArrowRightImg from "../../../public/images/icon/arrow-right.svg";

function Services({ services, showAllServices }) {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center full-width">
					<h2>
						Everything your business
						<span className="aximo-title-animation">
							needs to grow
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item, index) => (
							<FadeInStagger key={item.id} index={index} className="col-lg-6">
								<ServiceCard service={item} />
							</FadeInStagger>
						))}
					</div>
					{!showAllServices && (
						<Link className="aximo-more-btn" href="/service">
							View More <Image className="rt-ml-20" src={ArrowRightImg} alt="arrow right" />
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default Services;

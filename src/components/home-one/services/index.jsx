import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import ArrowRightImg from "../../../public/images/icon/arrow-right.svg";
import { FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import HeaderButton from "../header/HeaderButton";
import CustomButton from "./customButton";

function Services({ services, isServiceButton }) {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center full-width">
					<h2>
						Your Growth. One Studio.
						<span className="aximo-title-animation">
							Zero Compromises.
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
					<FadeInStaggerTwoChildren>
						<div className="service-subtitle">
							<p>
								{`The8verse is a growth studio for brands that mean business. We think, build, and launch everything your brand needs faster than you'd expect, better than you'd imagine.`}
							</p>
						</div>
					</FadeInStaggerTwoChildren>
				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item, index) => (
							<FadeInStagger key={item.id} index={index} className="col-lg-6">
								<ServiceCard service={item} />
							</FadeInStagger>
						))}
					</div>
					{!isServiceButton && (
						<Link className="aximo-more-btn" href="/service">
							View More <Image className="rt-ml-20" src={ArrowRightImg} alt="arrow right" />
						</Link>
					)}
					<div className="custom-btn-wrapper">
						<CustomButton title={"View Portfolio"} link={"/portfolio"} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;

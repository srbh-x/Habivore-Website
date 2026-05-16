import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
function StoryContent() {
	return (
		<div className="row">
			<div className="aximo-section-title center title-description">
				<h2>
					<span className="aximo-title-animation">
						Our Vision & Mission
						<span className="aximo-title-icon">
							<Image src={Star2Img} alt="star" />
						</span>
					</span>
					Statement
				</h2>
			</div>
			<div className="col-lg-6">
				<h3>Our vision</h3>
				<p>
					To become the world's most trusted growth partner where startups, businesses, and enterprises across every industry and continent come to build, scale, and dominate their markets.</p>
				<p>
					We envision a world where businesses no longer have to choose between quality, speed, and affordability. Where one dedicated team handles everything. A world where great ideas are never held back by lack of execution, and every brand gets the opportunity to compete, scale, and leave a mark on the world.
				</p>
			</div>
			<div className="col-lg-6">
				<h3>Our mission</h3>
				<p>
					Our mission is to redefine how businesses grow by delivering strategies that create measurable impact at every stage of a business journey.
				</p>
				<p>
					We exist to be more than an agency. The8verse is a growth partner that stays with your business from the very first idea to post-launch acceleration and beyond ensuring that every decision we make moves your business forward.
				</p>
			</div>
		</div>
	);
}

export default StoryContent;

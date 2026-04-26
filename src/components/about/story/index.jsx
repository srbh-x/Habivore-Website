import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							We're Just Getting
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="star" />
							</span>
						</span>
						Started
					</h2>
					<p>
						The8verse was born in 2026 with a simple but powerful belief that businesses deserve more than disconnected agencies, generic strategies, and slow execution. We built a growth studio where branding, technology, marketing, and media work together as one because that's the only way real growth happens.
					</p>
					<p>Most agencies hand over a deliverable and walk away. We don't. The8verse stays with you from your very first brand decision to post-launch acceleration and beyond. Whether you're just starting out or already in the market and ready to scale, we're built to grow with you at every stage. In a short time, we've had the privilege of working with businesses across 3+ countries delivering projects across branding, product development, marketing, and media production. Every project has made us sharper, faster, and better at what we do.</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;

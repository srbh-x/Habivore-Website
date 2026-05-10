import Image from "next/image";
import Shape1Img from "../../../public/images/v1/shape1.png";
import Star2Img from "../../../public/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Let’s build
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				something great together
			</h2>
			<p>
				Have a project in mind or just exploring your options? We'd love to hear from you. Whether you're a startup finding your footing, a business ready to scale, or an enterprise looking for a sharper edge.The8verse is ready to help you grow.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Give us a call:</li>
						<li>
							<a href="tel:+91 9847990284">+91 9847990228</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
							<a href="mailto:team@habivore.com">team@habivore.com</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					{/* <li>
						<a href="https://twitter.com/" target="_blank">
							<i className="icon-twitter"></i>
						</a>
					</li> */}
					{/* <li>
						<a href="https://facebook.com/" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li> */}
					<li>
						<a href="https://www.instagram.com/habivore" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/the8verse/" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<Image src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;

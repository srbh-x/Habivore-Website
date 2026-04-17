import Image from "next/image";
import Link from "next/link";
import LinkImg from "../../../public/images/icon/link2.svg";

function PortfolioCard({ portfolio: { title, description, img, link } }) {
	return (
		<>
			<div className="aximo-project-thumb3">
				<Image src={img} alt={title} />
				<Link href={link} className="aximo-project-link">
					<Image src={LinkImg} alt="Link" />
				</Link>
			</div>
			<div className="aximo-project-data3">
				<h3>
					<Link href={link}>{title}</Link>
				</h3>
				<p>{description}</p>
			</div>
		</>
	);
}

export default PortfolioCard;

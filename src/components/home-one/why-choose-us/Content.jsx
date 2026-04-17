import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					How we turn
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<span className="aximo-title-animation">
					ideas into growth
				</span>
			</h2>
			<p>
				Every project starts with a conversation and ends with results. We take time to understand your business, your goals, and what success truly means for you.
			</p>
			<p>
				From strategy to execution, we move fast, stay focused, and keep things simple so you spend less time managing agencies and more time growing your business.
			</p>
		</div>
	);
}

export default Content;

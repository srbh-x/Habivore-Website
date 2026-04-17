"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={6} duration={6} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Brands Launched</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={10} duration={6} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Successful projects</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={3} duration={6} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Countries Served</p>
			</div>
		</div>
	);
}

export default AboutCounter;

function FaqAccordion() {
	return (
		<>
			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
				>
					What is The8verse?
				</button>

				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						The8verse is a global growth studio that helps startups, businesses, and enterprises build and scale through branding, technology, marketing, and media all under one roof.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
				>
					What makes The8verse different from a regular agency?
				</button>

				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						Unlike traditional agencies that specialize in one area, The8verse is a full-spectrum growth studio. We handle everything your business needs to grow from brand identity and web development to marketing strategy and media production so you never have to juggle multiple vendors again.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseThree"
				>
					How does the onboarding process work?
				</button>

				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						It starts with a conversation. We take the time to understand your business, goals, and vision before recommending a path forward. From there, we build a tailored strategy and assemble the right team to execute it fast and without the back and forth.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#four"
				>
					Do you offer ongoing support after project delivery?
				</button>

				<div id="four" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						Yes. Growth doesn't stop at launch and neither do we. We offer ongoing retainer and support packages to help businesses continuously optimize, scale, and stay ahead of the competition.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#five"
				>
					How do I get started with The8verse?
				</button>

				<div id="five" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						<a href="/contact-us">Book a free strategy call</a> with our team and we'll take it from there. No commitments, no pressure just a conversation about your business and how we can help it grow.
					</div>
				</div>
			</div>
		</>
	);
}

export default FaqAccordion;

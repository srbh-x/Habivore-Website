"use client";
import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageFormEmail from "./MessageFormEmail";
import { useState } from "react";

function Footer() {
	const [success, setSuccess] = useState(false);

	return (
		<footer className="aximo-footer-section dark-bg">
			<div className="container">
				<div className="aximo-footer-top aximo-section-padding">
					<div className="row">
						<div className="col-lg-7">
							<FooterContent />
						</div>

						<div className="col-lg-5">

							{!success ? (
								// 🔵 BEFORE SUBMIT (show form)
								<div className="aximo-form-wrap">
									<h4>Send us a message</h4>
									<MessageFormEmail setParentSuccess={setSuccess} />
								</div>
							) : (
								// 🟢 AFTER SUCCESS (replace completely)
								<div className="sucessFooter">
									<h2>Form Submitted Successfully</h2>
									<p>We’ll get back to you soon.</p>

								</div>
							)}

						</div>

					</div>
				</div>

				<div className="aximo-footer-bottom">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
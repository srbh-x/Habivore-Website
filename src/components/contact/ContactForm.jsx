"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactThumb from "../../public/images/contact/contact-thumb.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const submitForm = (formData) => {
		setLoading(true);

		emailjs
			.send(
				"service_tqsn2rs",
				"template_r3kc1un",
				formData,
				"vu-I-dIwbYOYYVFlh"
			)
			.then(() => {
				setSuccess(true);
				setLoading(false);
				reset();
				setTimeout(() => setSuccess(false), 5000);
			})
			.catch(() => {
				setLoading(false);
			});
	};
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								<span className="aximo-title-animation">
									Contact us for a
									<span className="aximo-title-icon">
										<Image src={Star2Img} alt="Star" />
									</span>
								</span>
								personal experience
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<Image src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="phone"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea
										{...register("message", { required: "Message is required." })}
										name="message"
									></textarea>
								</div>
								<button id="aximo-main-btn" type="submit" disabled={loading}>
									{loading ? "Sending..." : success ? "Message Sent!" : "Send Message"}
								</button>
								{success && (
									<p style={{ color: "green", marginTop: "10px" }}>
										Your message has been sent successfully!
									</p>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;

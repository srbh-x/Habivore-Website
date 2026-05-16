"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Star3Img from "../../../public/images/v1/star3.png";

// Original data
const sliderData = [
	{
		title: "Growth Has a New Universe.",
		img: Star3Img,
	},
];

// 🔥 Repeat slides (scalable)
const repeatCount = 20;
const slides = Array.from({ length: repeatCount }, (_, i) => {
	const item = sliderData[i % sliderData.length];
	return {
		...item,
		id: i,
	};
});

// Swiper settings
const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				<Swiper {...swiperSettings}>
					{slides.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="aximo-auto-slider-item">
								<h3>{item.title}</h3>
								<Image src={item.img} alt={item.title} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default AutoSlider;
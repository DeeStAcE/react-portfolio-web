import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: "",
		name: "name",
		review:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et ratione a fugit, sequi libero quo quibusdam corrupti facilis quia!",
	},

	{
		avatar: "",
		name: "name",
		review:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et ratione a fugit, sequi libero quo quibusdam corrupti facilis quia!",
	},

	{
		avatar: "",
		name: "name",
		review:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et ratione a fugit, sequi libero quo quibusdam corrupti facilis quia!",
	},
];

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className='container testimonials__container'
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className='testimonial'>
							<div className='client__avatar'>
								<img src='' alt='avatar' />
							</div>
							<h5 className='client__name'>{name}</h5>
							<small className='client__review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;

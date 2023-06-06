import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { LuAward } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='About Image' />
					</div>
				</div>

				<div className='about__content'>
					{/* <div className='about__cards'>
						<article className='about__card'>
							<LuAward className='about__icon' />
							<h5>Experience</h5>
							<small>3+ Years Working</small>
						</article>
						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>
						<article className='about__card'>
							<BsFolderCheck className='about__icon' />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article>
					</div> */}
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur et
						iusto temporibus non ab tempora ipsum harum asperiores fuga, modi
						beatae reprehenderit enim in quis sit quisquam vel. Praesentium,
						quidem.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;

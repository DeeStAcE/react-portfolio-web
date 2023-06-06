import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				DeeStAcE
			</a>
			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href=''>
					<FaFacebookSquare />
				</a>
				<a href=''>
					<FaInstagram />
				</a>
				<a href=''>
					<FaTwitterSquare />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; DeeStAcE Portfolio. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;

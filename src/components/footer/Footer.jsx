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
				{/* <li>
					<a href='#testimonials'>Testimonials</a>
				</li> */}
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a
					href='https://pl-pl.facebook.com/profile.php?id=100084609315152'
					target='_blank'>
					<FaFacebookSquare />
				</a>
				<a href='https://www.instagram.com/deestace/' target='_blank'>
					<FaInstagram />
				</a>
				<a href='https://twitter.com/deestace4real' target='_blank'>
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

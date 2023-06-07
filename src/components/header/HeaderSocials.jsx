import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/dawid-alan-firmowski-659750231/' target='_blank'>
				<BsLinkedin />
			</a>
			<a href='https://github.com/DeeStAcE' target='_blank'>
				<BsGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;

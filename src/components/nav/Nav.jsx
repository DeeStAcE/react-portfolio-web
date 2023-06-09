import React from "react";
import "./nav.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<nav>
			<a
				href='#'
				onClick={() => setActiveNav("#")}
				className={activeNav === "#" ? "active" : ""}>
				<BiHomeAlt2 />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}>
				<BiUser />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<BiBookAlt />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}>
				<RiServiceLine />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}>
				<BiMessageAlt />
			</a>
		</nav>
	);
};

export default Nav;

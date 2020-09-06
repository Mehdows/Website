import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-red-transparent.png";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;
const larvDate = Date.parse("20 Jan 2021 09:00:00");
//const larvDate = Date.parse("4 Sep 2020 12:00:00");

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a complete state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<span className="countdown">
				{days}:{hours}:{minutes}:{seconds}
			</span>
		);
	}
};

export default function Home() {
	return (
		<>
			<div className="firstView">
				<img src={logo} className="logoLarge" alt="logotype" />
				<h1 className="titleLine">__________</h1>
				<h3>LARV at Luleå University of Technology</h3>

				<Countdown date={larvDate} renderer={renderer}></Countdown>
			</div>

			<div className="content">
				<p>
					LARV, short for Luleå arbetsmarknadsvecka, is the largest event held
					annually at Luleå university of technology. LARV is a project
					dedicated to help students advance their professional careers and to
					help employers find the competence of tomorrow. This is done through a
					week filled with career related events, inspiring seminars and most
					importantly a fair involving over 110 organisations and 2000 students.
				</p>
				<div className="twoButtons">
					<NavLink className="button" to="/students">
						STUDENTS
					</NavLink>
					<NavLink className="button" to="/organizations">
						ORGANIZATIONS
					</NavLink>
				</div>

				<h1>News</h1>
				<p>
					When there are updates to LARV or to the LARV website they will be
					posted here.
				</p>
			</div>
		</>
	);
}

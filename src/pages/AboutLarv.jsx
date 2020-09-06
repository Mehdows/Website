import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
	return (
		<>
			<h1>About LARV</h1>
			<p>
				LARV, short for Luleå arbetsmarknadsvecka, is a series of events held
				annually at Luleå university of technology. LARV has since 1983 been
				hosted by the student union of engineering and is a project with the
				purpose to help students advance their professional careers and to
				prepare them for life after graduation. For many years the project has
				kept growing and does today involve over 110 organisations, 2000+
				students and grosses close to 3 Mkr in revenue. This makes it the most
				comprehensive event at LTU.
			</p>
			<p>
				The acronym LARV roughly translates to Luleå career week. As the name
				suggests, the project is mostly about planning a week dedicated to
				student career development. Usually occurring during the 3rd week of
				january, LARV provides events such as inspiring seminars, workshops,
				career coaching, individual meetings between students and organisations.
				The largest event held during LARV is the LARV-fair. This fair acts as a
				platform for students and companies to truly get to know each other. The
				fair is a one day event and ends with a grand banquet which every
				company and involved student is invited to attend.
			</p>
			<p>
				Prep-week is another major part of the project. This is a week held a
				couple of months before main week with the intent to prepare students
				for LARV. This is done through informative seminars regarding LARV, how
				to present yourself to companies, how to get started with and use
				LinkedIn, how to write a cover letter and other events in the same
				category.
			</p>
			<p>
				Are you a student that wants to get involved or an organization that
				wants to be a part of LARV? Read more about what LARV can do for you as
				a student or your organization here…
			</p>

			<div className="twoButtons">
				<NavLink className="button" to="/students">
					STUDENTS
				</NavLink>
				<NavLink className="button" to="/organizations">
					OR
				</NavLink>
			</div>
		</>
	);
}

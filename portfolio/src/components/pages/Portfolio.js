import React, { useState } from "react";
import ProjectList from "../ProjectList";

export default function Portfolio() {
	const [apps, setApps] = useState(
	  [
		{
		  title: "",
		  body: "",
		  img: "",
		  deployed: "",
		  gitLink: "",
		  id: 1,
		},
		{
		  title: "",
		  body: "",
		  img: "",
		  deployed: "",
		  gitLink: "",
		  id: 2,
		},
		{
		  title: "",
		  body: "",
		  img: "",
		  deployed: "",
		  gitLink: "",
		  id: 3,
		},
		{
		  title: "",
		  body: "",
		  img: "",
		  deployed:
			"",
		  gitLink:
			"",
		  id: 4,
		},
		{
		  title: "",
		  img: "",
		  deployed: "",
		  gitLink: "",
		  id: 5,
		},
		{
		  title: "",
		  body: "",
		  img: "",
		  deployed: "",
		  gitLink: "",
		  id: 6,
		},
	  ],
	  []
	);
	return (
	  <div className="m-2 min-vh-100">
		<h1 className="text-center p-2"> Portfolio </h1>
		<ProjectList apps={apps} heading="Projects" />
	  </div>
	);
  }
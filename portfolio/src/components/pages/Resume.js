import React from "react";

export default function Resume() {
	return(
		<>
		<div>
		  <h1 className="text-center p-2 m-2"> Resume </h1>
		</div>
		<div className="min-vh-100">
		  <div className="row">
			<h5 className="d-flex justify-content-center">
			  {" "}
			  Below is a copy of my resume{" "}
			</h5>
		  </div>
		  <div className="row">
			<div className="d-flex justify-content-center">
			  <a
				href=""
				target="_blank"
				rel="noreferrer"
				style={styles.shadow}
			  >
				<img alt="resume" style={styles.img} />
			  </a>
			</div>
		  </div>
		</div>
	  </>
	)
}
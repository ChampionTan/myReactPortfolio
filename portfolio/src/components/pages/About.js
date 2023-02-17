import React from 'react';

export default function About() {
	return (
	  <>
		<div className="row m-2 p-3">
		  <h1 className="text-center"> About Me </h1>
		</div>
		<div className="min-vh-100">
		  <div className="row m-2 p-3">
			<div className="d-flex justify-content-center mb-3">
			  <img alt="me"  />
			</div>
			<div
			  className="d-flex justify-content-evenly text-center"
			  
			>
			  <p className="fs-4 p-2 d-flex justify-content-center">
				Hello! <br />
				My name is Tanner, i am a recent graduate of the UNCC coding bootcamp. I was born and raised in the Outer Banks of NC. I spent the last 6 years in the Navy living in San Diego. Some of my hobbies include rock climbing, bowling, playing video games, and using my new learned skills to develop websites!
			  </p>
			</div>
		  </div>
		</div>
	  </>
	);
  }
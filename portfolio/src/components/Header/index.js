import React from 'react';
import Navigation from '../Navigation';
import "./index.css";

export default function Header ({handlePageChange, pages, currentPage}) {
	return(
		<>
		<header className="header">
			<h1 className="name text-center">Tanner Lumsden</h1>
			<Navigation
			currentPage={currentPage}
			handlePageChange={handlePageChange}
			pages={pages}
			/>
			</header>
			</>
	);
}


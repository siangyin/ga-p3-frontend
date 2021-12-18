// import { useState, useEffect, useRef } from "react";
// import { a } from "react-router-dom";


export default function NavBar() {
	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content border-solid">
			<div className="flex-none px-2 mx-2">
				<span className="text-lg font-bold">ShareUrKitchenLeh</span>
			</div>
			<div className="flex-1 px-2 mx-2">
				<div className="items-stretch hidden lg:flex">
					<a
						href="https://www.google.com/"
						className="btn btn-ghost btn-sm rounded-btn"
					>
						My Items
					</a>
					<a
						href="https://www.google.com/"
						className="btn btn-ghost btn-sm rounded-btn"
					>
						New Item
					</a>
					<a
						href="https://www.google.com/"
						className="btn btn-ghost btn-sm rounded-btn"
					>
						My Groups
					</a>
					<a
						href="https://www.google.com/"
						className="btn btn-ghost btn-sm rounded-btn"
					>
						New Group
					</a>
				</div>
			</div>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						></path>
					</svg>
				</button>
			</div>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
}

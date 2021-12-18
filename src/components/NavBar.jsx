// import { useState, useEffect, useRef } from "react";
// import { a } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";

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
					<FaHeart />
				</button>
			</div>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<FaSearch />
				</button>
			</div>
		</div>
	);
}

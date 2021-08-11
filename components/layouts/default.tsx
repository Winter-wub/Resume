import manifest from "./manifest.json";
import NavLink from "@Components/NavLink";
import { BsList } from "react-icons/bs";
import React, { useState } from "react";


const navigations = [{
	title: "Home",
	path: "/"
}, {
	title: "Projects",
	path: "/projects"
}, {
	title: "Why me",
	path: "/whyme"
}, {
	title: "Contact",
	path: "/contact"
}];

const DefaultLayout: React.FC = ({ children }) => {

	const [toggleCollapse, setToggleCollapse] = useState(false)

	return (
		<>
			<div className="flex">
				<div className="font-bold text-2xl mr-auto p-5 uppercase">
					{manifest.brand}
				</div>
				<div className="items-center justify-center hidden md:flex">
					{
						navigations.map(navigation => (
							<NavLink
								key={navigation.title}
								href={navigation.path}
								activeClassName="text-red-500 border-t-4 border-red-500"
							>
								<a className="h-full flex items-center mr-4">
									<div className="font-bold uppercase">
										{navigation.title}
									</div>
								</a>
							</NavLink>
						))
					}
				</div>
				<div className="flex md:hidden items-center mr-2">
					<button className="rounded border p-2" onClick={() => setToggleCollapse(!toggleCollapse)}>
						<BsList />
					</button>
				</div>
			</div>
			{
				toggleCollapse && (
					<div className="p-5 bg-black flex flex-col shadow border-2 border-white rounded">
						{
							navigations.map(item => (
								<NavLink key={item.title} href={item.path} activeClassName="">
									<a className="text-white uppercase p-1">{item.title}</a>
								</NavLink>
							))
						}
					</div>
				)
			}
				{children}
		</>
	);
};

export default DefaultLayout;
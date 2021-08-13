import manifest from "./manifest.json";
import { BsList } from "react-icons/bs";
import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import Head from "next/head";


const navigations = [{
	title: "Home",
	section: "home"
}, {
	title: "Projects",
	section: "projects"
}, {
	title: "Why me",
	section: "whyme"
}, {
	title: "Contact",
	section: "contact"
}];

const DefaultLayout: React.FC = ({ children }) => {

	const [toggleCollapse, setToggleCollapse] = useState(false);

	return (
		<>
			<Head>
				<title>Prachayawut Sirisuth</title>
			</Head>
			<div className="relative">
				<div className="z-40 fixed top-0 w-full">
					<div className="flex bg-white shadow-xl">
						<div className="font-bold text-2xl  p-5 uppercase text-black bg-white  mr-auto">
							{manifest.brand}
						</div>

						<Scrollspy items={["home", "projects", "whyme", "contact"]}
						           className="items-center justify-center hidden md:flex bg-white dark:bg-black"
						           currentClassName="text-indigo-800 border-t-4 border-indigo-800">
							{
								navigations.map(navigation => (
									<a key={navigation.section} className="h-full flex items-center mr-4 text-black dark:text-white"
									   href={`#${navigation.section}`}>
										<div className="font-bold uppercase">
											{navigation.title}
										</div>
									</a>
								))
							}
						</Scrollspy>
						<div className="flex md:hidden items-center mr-2">
							<button className="rounded border p-2" onClick={() => setToggleCollapse(!toggleCollapse)}>
								<BsList />
							</button>
						</div>
					</div>
					{
						toggleCollapse && (
							<div
								className="p-5 bg-black flex flex-col shadow border-2 border-white rounded animate__animated animate__fadeInDown z-10">
								{
									navigations.map(item => (
										<a key={item.title} className="text-white uppercase p-1" href={`#${item.section}`}>{item.title}</a>
									))
								}
							</div>
						)
					}
				</div>
				<div className="mt-20">
					{children}
				</div>
			</div>
		</>
	);
};

export default DefaultLayout;
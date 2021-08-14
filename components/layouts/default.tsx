import manifest from "./manifest.json";
import { BsList } from "react-icons/bs";
import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import Head from "next/head";
import useDarkMode from "../../hooks/darkMode";
import Link from "next/link";


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
	const [colorTheme, setTheme] = useDarkMode();

	const togglerTheme = (
		<div className="mr-auto md:ml-5 flex items-center justify-center">
			{colorTheme === "light" ? (
				<svg
					onClick={() => setTheme("light")}
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-white cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
			) : (
				<svg
					onClick={() => setTheme("dark")}
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-black cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			)}
		</div>
	);

	return (
		<>
			<Head>
				<title>Prachayawut Sirisuth</title>
			</Head>
			<div className="relative bg-gray-50 dark:bg-black">
				<div className="z-40 fixed top-0 w-full ">
					<div className="flex bg-gray-50 dark:bg-black  shadow-xl">
						<Link href="/">
							<a className="font-bold md:text-2xl p-5 uppercase text-black dark:text-white">
								{manifest.brand}
							</a>
						</Link>
						{togglerTheme}
						<Scrollspy items={["home", "projects", "whyme", "contact"]}
						           className="items-center justify-center hidden md:flex bg-gray-50 dark:bg-black"
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
							<button className="rounded border p-2 dark:text-white text-black"
							        onClick={() => setToggleCollapse(!toggleCollapse)}>
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
				<div className="md:mt-5 mt-20 bg-gray-50 dark:bg-black">
					{children}
				</div>
			</div>
		</>
	);
};

export default DefaultLayout;
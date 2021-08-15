import Image from "next/image";
import meImage from "../public/images/me.png";
import { VFC } from "react";
import manifest from "../pages/manifest.json";
import styles from "../styles/HomeSection.module.scss";
import cx from "classnames";
import { ProptypeTimeline } from "@Components/Types";
import { FiTool } from "react-icons/fi";
import { FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { GrGraphQl, GrOracle } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { SiNextDotJs, SiPostgresql } from "react-icons/si";

const ToolLogoMap: VFC<{ toolname: string }> = ({ toolname, ...props }) => {
	switch (toolname) {
		case "vuejs":
			return <FaVuejs {...props} />;
		case "nodejs":
			return <FaNodeJs {...props} />;
		case "react":
			return <FaReact {...props} />;
		case "graphql":
			return <GrGraphQl {...props} />;
		case "mongodb":
			return <DiMongodb {...props} />;
		case "nextjs":
			return <SiNextDotJs {...props} />;
		case "oracle_db":
			return <GrOracle {...props} />;
		case "postgreSQL":
			return <SiPostgresql {...props} />;
		default:
			return <FiTool {...props} />;
	}
};

const TimeLine: VFC<ProptypeTimeline> = ({ id, item }) => {
	return (
		<div
			className={`mb-8 flex justify-between items-center w-full ${id % 2 !== 0 ? "flex-row-reverse" : ""}`}>
			<div className="order-1 md:w-5/12 w-0" />
			<div
				className="z-20 items-center order-1 bg-gray-800 shadow-xl w-40 h-8 rounded-full hidden md:flex">
				<h1
					className="mx-auto font-semibold text-lg text-white">{item.from_month}/{item.from_year} - {item.to_month ? `${item.to_month}/${item.to_year}` : "Current"}</h1>
			</div>
			<div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 animate__animated">
				<h3 className="font-bold text-gray-800 text-xl uppercase mb-3">{item.company}</h3>
				<p className="text-sm text-gray-900 text-opacity-100 mb-3">
					{item.desc}
				</p>
				<div className="p-1 md:hidden mb-3">
					{item.from_month}/{item.from_year} - {!item?.to_year ? "Current" : `${item.to_month}/${item.to_year}`}
				</div>
				<div className="flex">
					{
						item.tools?.map((item) => <div key={item} className="text-white mr-2 text-lg">
							{/*// @ts-ignore*/}
							<ToolLogoMap toolname={item} size={25} />
						</div>)
					}
				</div>
			</div>
		</div>
	);
};

export const HomeSection: VFC = () => {
	return (
		<>
			<section id="home" className="flex w-full container mx-auto md:p-20 bg-gray-50 dark:bg-black">
				<div className="w-full p-10 bg-black md:bg-gray-50 md:dark:bg-black md:w-auto">
					<div
						className="font-extrabold md:text-5xl text-3xl mb-10 text-white md:text-black md:dark:text-white animate__animated animate__jackInTheBox">
						<span className="bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">
							Turn</span> your <span
						className="text-indigo-600">idea</span> into <span
						className="bg-gradient-to-r from-red-300 to-red-800 text-transparent bg-clip-text">reality!</span>
					</div>
					<div className="text-gray-500 mb-10">
						From bainstroming to launch, i will help you build a beautiful, inntuitive app that will wow your customers
					</div>
					<a
						className="rounded-xl text-white bg-indigo-600 p-3 shadow uppercase hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"
						href="#contact">
						Request a quote
					</a>
				</div>
				<div
					className="w-0 md:w-1/2 lg:w-1/3 flex items-center justify-center animate__animated animate__backInRight animate__delay-1s">
					<Image src={meImage}
					       className={cx("h-full w-full bg-gradient-to-bl from-indigo-700 to-red-200", styles.meFrame)}
					       alt="PrachayawutSirisuth" />
				</div>
			</section>
			<div className="bg-gray-900 p-1 text-white py-10 px-12">
				<div className="text-center uppercase font-bold mb-5 text-sm">Work Experience</div>
				<div className="relative container mx-auto">
					<div
						className="border-2-2 border-blue-500 h-full border right-1/2 hidden md:block absolute" />
					{
						manifest.timelines.map((item, id) => (
							<TimeLine key={id} id={id} item={item} />
						))
					}
				</div>
			</div>
		</>
	);
};
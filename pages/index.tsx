import DefaultLayout from "../components/layouts/default";
import { chunk } from "lodash";
import manifest from "./manifest.json";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
	return (
		<DefaultLayout>
			<div className="flex w-full container mx-auto md:p-20">
				<div className="w-full p-10 bg-black md:bg-white md:w-1/2">
					<div className="font-extrabold md:text-5xl text-3xl mb-10 text-white md:text-black">
						<span
							className="bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">Turn</span> your <span
						className="text-indigo-600">idea</span> into <span
						className="bg-gradient-to-r from-red-300 to-red-800 text-transparent bg-clip-text">reality!</span>
					</div>
					<div className="text-gray-500 mb-10">
						From bainstroming to launch, i will help you build a beautiful, inntuitive app that will wow your customers
					</div>
					<a className="rounded-xl text-white bg-indigo-600 p-3 shadow uppercase">
						Request a quote
					</a>
				</div>
				<div className="w-0 md:w-1/2 bg-indigo-600 rounded-2xl">

				</div>
			</div>
			<div className="bg-gray-900 p-1 text-white py-10 px-12">
				<div className="text-center uppercase font-bold mb-5 text-sm">Work Experience</div>
				<div className="relative container mx-auto">
					<div
						className="border-2-2 border-opacity-20 border-blue-500 h-full border right-1/2 hidden md:block absolute" />
					{
						chunk(manifest.timelines, 1).map((items, level) => (
							<>
								{
									items.map((item, id) => (
										<div
											className={`mb-8 flex justify-between items-center w-full ${level % 2 !== 0 ? "flex-row-reverse" : ""}`}
											key={id}>
											<div className="order-1 md:w-5/12 w-0" />
											<div
												className="z-20 items-center order-1 bg-gray-800 shadow-xl w-40 h-8 rounded-full hidden md:flex">
												<h1
													className="mx-auto font-semibold text-lg text-white">{item.from_month}/{item.from_year} - {item.to_month}/{item.to_year}</h1>
											</div>
											<div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4">
												<h3 className="font-bold text-gray-800 text-xl uppercase mb-3">{item.company}</h3>
												<p className="text-sm text-gray-900 text-opacity-100">
													{item.desc}
												</p>
											</div>
										</div>
									))
								}
							</>
						))
					}
				</div>
			</div>
			<div className="p-1 bg-white flex flex-col items-center container mx-auto">
				<h2 className="uppercase font-extrabold my-5">Freelance Projects</h2>
				<h3 className="md:text-5xl text-3xl mb-5">2 years of app <div
					className="bg-gradient-to-r from-indigo-700 to-red-500 text-transparent bg-clip-text">development</div></h3>
				<div className="text-center text-sm text-gray-500 h-20 w-80 mb-10">As Fullstack Web developer, i helped early
					stage
					startup. from building an MVP all the way to building full-scale app which are used today by thousands of
					people across the globe
				</div>
				{
					manifest.apps.map((item, id) => (
						<div
							className={`md:flex md:flex-row flex-col flex m-5 w-full justify-between items-center ${id % 2 === 0 ? "md:flex-row-reverse" : ""}`}
							key={id}
						>
							<div className="order-1 md:w-1/2 w-full">
								<Carousel autoPlay infiniteLoop interval={3000} showIndicators={false}>
									{
										item.images.map((image, id) => {
											const Img = require(`../public/${image}`);
											return (
												<>
													{/* @ts-ignore */}
													<Image className="shadow-xl rounded-2xl" key={id} src={Img} alt="myenglishtime-1" height={400}
													       width={250} />
												</>
											);
										})
									}

								</Carousel>
							</div>
							<div className="order-1 md:w-1/2 w-full p-2">
								<h1 className="text-xl mb-5 font-bold uppercase">{item.name}</h1>
								<p className="text-gray-500 mb-3">{item.desc}</p>
								<a className="underline">View Project</a>
							</div>
						</div>
					))
				}
			</div>
			<div className="bg-gray-900 text-white">
				<div className="container mx-auto p-10">
					<h2 className="text-center uppercase font-bold mb-5 text-sm">Why me</h2>
					<div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
						<div>
							<h4 className="mb-3">Experience</h4>
							<p className="text-gray-400">
								I will apple all the grained experience knowledge and best practices from multiple projects.
							</p>
						</div>
						<div>
							<h4 className="mb-3">Transparency</h4>
							<p className="text-gray-400">
								Transparent process with regular feedback loops and updates following an agreed milestone plan so you
								know when you get what.
							</p>
						</div>
						<div>
							<h4 className="mb-3">One-stop-shop</h4>
							<p className="text-gray-400">
								I partner with you through the whole product lifecycle. I will design, build and launch your app with
								you.
							</p>
						</div>
						<div>
							<h4 className="mb-3">Ownership / IP</h4>
							<p className="text-gray-400">
								All intellectual property and copyright is fully assigned and transferred to you with every completed
								milestone.
							</p>
						</div>
						<div>
							<h4 className="mb-3">Flexibility</h4>
							<p className="text-gray-400">
								I will build you app for a fixed price with set milestones. You can cancel at any time and only pay for
								the last completed milestone.
							</p>
						</div>
						<div>
							<h4 className="mb-3">Guarantee</h4>
							<p className="text-gray-400">
								If you are not satisfied with any aspect of the app, I&apos;ll work with you to make it perfect.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white text-black p-1">
				<div className="container mx-auto">
					<h2 className="text-center uppercase font-bold mb-5 text-sm my-8">Let&apos;s make something awesome
						together</h2>
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-5">
							<div className="text-5xl font-bold mb-8">Request a <span
								className="bg-gradient-to-r from-red-500 to-indigo-800 text-transparent bg-clip-text">quote</span></div>
							<div className="h-14 w-full border-2 rounded border-indigo-700 mb-5">
								<input className="w-full h-full pl-5" placeholder="Name" />
							</div>
							<div className="h-14 w-full border-2 rounded border-indigo-700 mb-5">
								<input className="w-full h-full pl-5" placeholder="Email" />
							</div>
							<div className="h-48 w-full border-2 rounded border-indigo-700 mb-10">
								<textarea className="w-full h-full pl-5 pt-5" placeholder="Project details" />
							</div>
							<button className="bg-indigo-700 text-white p-5 rounded uppercase font-bold">Let&apos;s Kick off this
								project
							</button>
						</div>
						<div className="mb-5">
							<div className="text-5xl font-bold mb-8">Contacts</div>
							<div className="flex items-center mb-5">
								<FiMail className="mr-5" />
								<a href="mailto:prachayawut.s@gmail.com">
									Prachayawut.s@gmail.com
								</a>
							</div>
							<div className="flex items-center mb-8">
								<FiPhoneCall className="mr-5" />
								<a href="call:+66942519182">
									+66942519182
								</a>
							</div>
							<div className="">
								<div className="mb-3">Follow</div>
								<div className="flex">
									<a className="mr-3">
										<FaFacebook size={35} />
									</a>
									<a className="mr-3">
										<FaLinkedin size={35} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Index;
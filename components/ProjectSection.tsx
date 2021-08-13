import { useRef, VFC } from "react";
import manifest from "../pages/manifest.json";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { FaAndroid } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { GiWorld } from "react-icons/gi";
import { useScrollTriggerClassName } from "../hooks/scrollTrigger";

export const ProjectSection: VFC = () => {


	const section2Ref = useRef<HTMLHeadingElement>(null);
	useScrollTriggerClassName(section2Ref, ['animate__animated', 'animate__fadeInLeft'])

	return (
		<section id="projects" className="p-1 bg-white flex flex-col items-center container mx-auto">
			<h2 className="uppercase font-extrabold my-5">Freelance Projects</h2>
			<h3 className="md:text-5xl text-3xl mb-5 animate__animated"  ref={section2Ref}>2 years of app <div
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
							<Carousel autoPlay infiniteLoop interval={3000} showIndicators={false} showThumbs={false}>
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
							<div className="flex">
								{
									item?.android && <a href={item.android} target="_blank" rel="noreferrer"
									                    className="m-2 text-indigo-600 text-sm flex items-center flex-col"> <FaAndroid
										size={25} /> Google Play </a>
								}
								{
									item?.ios && <a href={item.ios} target="_blank" rel="noreferrer"
									                className="m-2 text-indigo-600 text-sm flex items-center flex-col"> <GrAppleAppStore
										size={25} /> App Store </a>
								}
								{
									item?.web && <a href={item.web} target="_blank" rel="noreferrer"
									                className="m-2 text-indigo-600 text-sm flex items-center flex-col"> <GiWorld
										size={25} /> WebApp </a>
								}
							</div>
						</div>
					</div>
				))
			}
		</section>
	)
}
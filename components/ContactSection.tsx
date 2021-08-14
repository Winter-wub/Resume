import { VFC } from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export const ContactSection: VFC = () => {
	return (
		<section id="contact" className="bg-white dark:bg-black text-black p-1">
			<div className="container mx-auto md:p-20">
				<h2 className="text-center uppercase font-bold mb-20 text-sm my-8 text-black dark:text-white">Let&apos;s make something awesome
					together</h2>
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="mb-5 rounded-2xl p-10 bg-black text-white shadow-xl">
						<div className="text-5xl font-bold mb-8">Request a <span
							className="bg-gradient-to-r from-red-500 to-indigo-800 text-transparent bg-clip-text">quote</span></div>
						<div className="h-14 w-full border-4 rounded border-indigo-700 mb-5">
							<input className="w-full h-full pl-5 text-black" placeholder="Name" />
						</div>
						<div className="h-14 w-full border-4 rounded border-indigo-700 mb-5">
							<input className="w-full h-full pl-5 text-black" placeholder="Email" />
						</div>
						<div className="h-48 w-full border-4 rounded border-indigo-700 mb-10">
							<textarea className="w-full h-full pl-5 pt-5 text-black" placeholder="Project details" />
						</div>
						<button className="bg-indigo-700 text-white p-5 rounded uppercase font-bold">Let&apos;s Kick off this
							project
						</button>
					</div>
					<div className="mb-5 p-10 text-black dark:text-white">
						<div className="text-5xl font-bold mb-10">Contacts</div>
						<div className="flex items-center mb-5">
							<FiMail className="mr-5" />
							<a href="mailto:prachayawut.s@gmail.com">
								prachayawut.s@gmail.com
							</a>
						</div>
						<div className="flex items-center mb-8">
							<FiPhoneCall className="mr-5" />
							<a href="tel:+66942519182">
								+66942519182
							</a>
						</div>
						<div className="">
							<div className="mb-3">Follow</div>
							<div className="flex">
								<a href="https://facebook.com/waveblur" target="_blank" rel="noreferrer" className="mr-3">
									<FaFacebook size={35} />
								</a>
								<a href="https://www.linkedin.com/in/prachayawut-sirisuth-4a690018b/" target="_blank" rel="noreferrer"
								   className="mr-3">
									<FaLinkedin size={35} />
								</a>
								<a href="https://github.com/Winter-wub" target="_blank" rel="noreferrer">
									<FaGithub size={35} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
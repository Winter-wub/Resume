import { VFC } from "react";

export const WhymeSection: VFC = () => {
	return (
		<section id="whyme" className="bg-gray-900 text-white">
			<div className="container mx-auto pb-36">
				<h2 className="text-center uppercase font-bold mb-5 text-sm pt-20">Why me</h2>
				<div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 p-20">
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
		</section>
	)
}
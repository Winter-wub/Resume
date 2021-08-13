import DefaultLayout from "../components/layouts/default";
import { HomeSection } from "@Components/HomeSection";
import { ProjectSection } from "@Components/ProjectSection";
import { WhymeSection } from "@Components/WhymeSection";
import { ContactSection } from "@Components/ContactSection";


const Index = () => {

	return (
		<DefaultLayout>
		<HomeSection/>
			<ProjectSection />
			<WhymeSection />
			<ContactSection />
		</DefaultLayout>
	);
};

export default Index;
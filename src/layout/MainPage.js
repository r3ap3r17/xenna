import NavBar from "./NavBar";
import AboutSection from "./sections/AboutSection";
import FaqSection from "./sections/FaqSection";
import HeaderPage from "./sections/HeaderPage";
import TestimonialSection from "./sections/TestimonialSection";

function MainPage() {
    return (
        <main>
            <NavBar />
            <HeaderPage />
            <AboutSection />
            <FaqSection />
            <TestimonialSection />
        </main>
    );
}

export default MainPage;
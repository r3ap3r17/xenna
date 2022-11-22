import Footer from "./Footer";
import NavBar from "./NavBar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
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
            <ContactSection />
            <Footer />
        </main>
    );
}

export default MainPage;
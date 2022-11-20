import NavBar from "./NavBar";
import AboutSection from "./sections/AboutSection";
import FaqSection from "./sections/FaqSection";
import HeaderPage from "./sections/HeaderPage";

function MainPage() {
    return (
        <main>
            <NavBar />
            <HeaderPage />
            <AboutSection />
            <FaqSection />
        </main>
    );
}

export default MainPage;
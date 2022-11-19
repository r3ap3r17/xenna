import NavBar from "./NavBar";
import AboutSection from "./sections/AboutSection";
import HeaderPage from "./sections/HeaderPage";

function MainPage() {
    return (
        <main>
            <NavBar />
            <HeaderPage />
            <AboutSection />
        </main>
    );
}

export default MainPage;
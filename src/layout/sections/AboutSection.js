import { Container, Col, Row } from "react-bootstrap";
import AboutCard from "../../components/AboutCard";

function AboutSection() {
    const ABOUT_CARD_DATA = [
        {
            icon: "fa-solid fa-file-circle-check",
            title: "Simple Application",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum"
        },
        {
            icon: "fa-solid fa-handshake",
            title: "Meant for Everyone",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum"
        },
        {
            icon: "fa-solid fa-circle-dollar-to-slot",
            title: "Flexible Payments",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum"
        }
    ]
    return (
        <section id="about" className="mt-5">
            <Container className="pt-5">
                <Container className="title-container">
                    <h1 className="section-title text-center">
                        Xenna helps you enjoy the furniture and electronics you want
                    </h1>
                    <p className="text text-center mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum
                    </p>
                </Container>
                <Row>
                    { ABOUT_CARD_DATA.map((card) => {
                        return <Col lg={ 4 }>
                            <AboutCard
                                icon={ card.icon }
                                title={ card.title }
                                text={ card.text } />
                        </Col>
                    }) }
                </Row>

            </Container>
        </section >
    );
}

export default AboutSection;
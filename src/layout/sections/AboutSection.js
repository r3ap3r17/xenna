import { Container, Col, Row } from "react-bootstrap";

function AboutSection() {
    return (
        <section className="mt-5">
            <Container className="pt-5">
                <Container className="title-container">
                    <h1 className="section-title text-center">
                        Xenna helps you enjoy the furniture and electronics you want
                    </h1>
                    <p className="text text-center mt-4 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum
                    </p>
                </Container>
                <Row>
                    <Col lg={ 4 }>
                        <div className="about-card">
                            <i class="fa-solid fa-file-circle-check"></i>
                            <h1 className="card-title">
                                Simple Application
                            </h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec interdum
                            </p>
                        </div>
                    </Col>
                    <Col lg={ 4 }>
                        <div className="about-card">
                            <i class="fa-solid fa-handshake"></i>
                            <h1 className="card-title">
                                Meant for Everyone
                            </h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec interdum
                            </p>
                        </div>
                    </Col>
                    <Col lg={ 4 }>
                        <div className="about-card">
                            <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            <h1 className="card-title">
                                Flexible Payments
                            </h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec interdum
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section >
    );
}

export default AboutSection;
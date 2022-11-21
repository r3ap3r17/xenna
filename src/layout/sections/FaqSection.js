import { Col, Container, Row } from "react-bootstrap";
import row1 from "../../assets/img/work-anywhere.svg";
import row2 from "../../assets/img/who-you-are.svg";
import row3 from "../../assets/img/payment-option.svg";
import SectionTitle from "../../components/SectionTitle";


function FaqSection() {
    return (
        <section id="faq">
            <Container className="pt-5">
                <SectionTitle title="How it works" />
                <Container>
                    {/* ROW 1 */ }
                    <Row className="mb-5">
                        <Col lg={ 6 }>
                            <Container className="p-5 faq-container">
                                <h1 className="title mb-4 mt-5">Get Started from Anywhere</h1>
                                <p className="text mb-4">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nullam vel.
                                </p>
                                <p className="text mb-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque ac tincidunt velit. Lorem ipsum dolor.
                                </p>
                                <a href="#home" className="text" style={ { color: "var(--primary)" } }>
                                    Start your Application
                                </a>
                            </Container>
                        </Col>
                        <Col lg={ 6 }>
                            <img src={ row1 } alt="" />
                        </Col>
                    </Row>

                    {/* ROW 2 */ }
                    <Row className="mb-5">
                        <Col lg={ 6 } className="order-1 order-lg-2">
                            <Container className="p-5 faq-container">
                                <h1 className="title mb-4 mt-5">Tell us Who You Are</h1>
                                <p className="text mb-4">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nullam vel.
                                </p>
                                <p className="text mb-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque ac tincidunt velit. Lorem ipsum dolor.
                                </p>
                                <a href="#home" className="text" style={ { color: "var(--primary)" } }>
                                    Start your Application
                                </a>
                            </Container>
                        </Col>
                        <Col lg={ 6 } className="order-2 order-lg-1">
                            <img src={ row2 } alt="" />
                        </Col>
                    </Row>

                    {/* ROW 3 */ }
                    <Row className="mb-5">
                        <Col lg={ 6 }>
                            <Container className="p-5 faq-container">
                                <h1 className="title mb-4 mt-5">Choose a Paiment Option</h1>
                                <p className="text mb-4">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nullam vel.
                                </p>
                                <p className="text mb-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque ac tincidunt velit. Lorem ipsum dolor.
                                </p>
                                <a href="#home" className="text" style={ { color: "var(--primary)" } }>
                                    Start your Application
                                </a>
                            </Container>
                        </Col>
                        <Col lg={ 6 }>
                            <img src={ row3 } alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section >
    );
}

export default FaqSection;
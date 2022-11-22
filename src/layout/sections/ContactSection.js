import { Col, Container, Row } from "react-bootstrap";
import StartButton from "../../components/StartButton";
import phone from "../../assets/img/cell phone-bro.svg";

function ContactSection() {
    return (
        <section id="contact">
            <Container className="px-0 p-lg-5 pt-md-0">
                <Row className="align-items-center">
                    <Col md={ 6 } className="order-1 order-md-2 px-5 px-sm-0">
                        <Container className="px-lg-5 py-5 text-center text-lg-start">
                            <h1 className="title">
                                Xenna is made for you
                            </h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Quisque ut sagittis ligula. Aliquam in ex eu mi egestas
                                cursus vel eu ipsum. Mauris quis euismod.
                            </p>
                            <StartButton type={ "secondary" } />
                        </Container>
                    </Col>
                    <Col md={ 6 } className="order-2 order-md-1">
                        <img src={ phone } alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactSection;
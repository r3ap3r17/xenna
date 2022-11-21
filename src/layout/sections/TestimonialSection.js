import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";

function TestimonialSection() {
    return (
        <section>
            <Container className="p-5">
                <SectionTitle title="What they said about us" />
                <Row>
                    <Col lg={ 6 } className="p-5 position-relative mb-4">
                        <i class="fa-solid fa-quote-left quotes-icon"></i>
                        <div className="client-wrap">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras rutrum felis eu velit feugiat dapibus. Sed at
                                pretium turpis, vel vehicula nulla. Nulla nec tellus
                                eu arcu consectetur porta ac
                            </p>
                            <div className="d-flex align-items-center">
                                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
                                <p className="text m-0">Sarah Smith</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={ 6 } className="p-5 position-relative mb-4">
                        <i class="fa-solid fa-quote-left quotes-icon"></i>
                        <div className="client-wrap">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras rutrum felis eu velit feugiat dapibus. Sed at
                                pretium turpis, vel vehicula nulla. Nulla nec tellus
                                eu arcu consectetur porta ac
                            </p>
                            <div className="d-flex align-items-center">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                                <p className="text m-0">John Marcus</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TestimonialSection;
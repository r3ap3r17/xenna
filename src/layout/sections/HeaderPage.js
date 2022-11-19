import { Col, Container, Row } from "react-bootstrap";
import header from "../../assets/img/team-bro.svg";
import StartButton from "../../components/StartButton";

function HeaderPage() {
    return (
        <Container>
            <Row>
                <Col sm={ 12 } lg={ 6 } className="mt-5 mt-lg-3 pt-lg-5">
                    <Container className="p-5 px-lg-0 pe-lg-5 mx-md-5 mx-lg-0">
                        <h1 className="mt-3">Flexible Ownership</h1>
                        <p className="my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                            lacus a velit blandit interdum. Integer neque ligula, gravida id
                            erat et, sagittis placerat nibh.
                        </p>
                        <StartButton type={ "primary" } />
                    </Container>
                </Col>
                <Col sm={ 12 } lg={ 6 } className="p-0">
                    <img src={ header } alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderPage;
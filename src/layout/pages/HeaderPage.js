import { Button, Col, Container, Row } from "react-bootstrap";
import header from "../../assets/img/team-bro.svg";

function HeaderPage() {
    return (
        <Container className="py-5">
            <Row>
                <Col className="ps-5 py-5 mt-5">
                    <h1 className="mt-3">Flexible ownership</h1>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                        lacus a velit blandit interdum. Integer neque ligula, gravida id
                        erat et, sagittis placerat nibh.
                    </p>
                    <Button variant="primary">Primary</Button>{ ' ' }
                </Col>
                <Col className="p-0">
                    <img src={ header } alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderPage;
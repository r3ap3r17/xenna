import { Container } from "react-bootstrap";

function SectionTitle(props) {
    return (
        <Container className="title-container">
            <h1 className="section-title text-center">
                { props.title }
            </h1>
            { props.children }
        </Container>
    );
}

export default SectionTitle;
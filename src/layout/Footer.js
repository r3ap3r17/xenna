import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import MainLogo from "../components/MainLogo";
import NavListItems from "../components/NavListItems";
import FooterText from "../components/FooterText";

function Footer() {
    const [logo, setLogo] = useState(false);

    const showLogo = () => {
        if (window.innerWidth >= 768) {
            setLogo(true)
        } else {
            setLogo(false)
        }
    }

    useEffect(() => {
        showLogo();
    }, []);

    window.addEventListener('resize', showLogo);
    return (
        <Container fluid="md" className="nav-group py-5 position-relative">
            { logo ? <MainLogo /> : null }
            <NavListItems />
            <FooterText />
        </Container>
    );
}

export default Footer;
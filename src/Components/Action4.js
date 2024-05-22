import React from "react";
import Navbars from "./Navbars";
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";

function Action4 () {
    return (
        <>
            <Navbars />
            <Row className="pt-4 m-5">
                <Col sm={6}>
                    <h1 className="font-weight-light"><b>Miel</b></h1>
                    <p className="mt-4">Le miel est une substance sucrée élaborée par les abeilles à miel à partir de nectar ou de miellat.
                        Elles l'entreposent dans la ruche et s'en nourrissent tout au long de l'année, en particulier lors de périodes climatiques défavorables.
                        Il est aussi consommé par d'autres espèces animales dont l'espèce humaine qui organise sa production par l'élevage des abeilles à miel.
                    </p>
                </Col>
                <Col sm={5}>
                    <Carousel controls={false} pause={false}>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('./Assets/Miel_1.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('./Assets/Miel_2.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Action4;
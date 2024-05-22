import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";
import Navbars from "./Navbars";

function Action2(props) {
    return (
        <div>
            <Navbars />
            <Row className="pt-4 m-5">
                <Col sm={6}>
                    <h1 className="font-weight-light">Fruits séchés</h1>
                    <p className="mt-4">Les fruits séchés ou fruits déshydratés sont des fruits frais ayant subi une déshydratation. On déshydrate les fruits entiers, tranchés en morceaux plus ou moins épais ou en purée. On ajoute parfois un corps acide comme du jus de citron. Une fois séchés, les fruits peuvent être conservés dans l'huile</p>
                </Col>
                <Col sm={5}>
                    <Carousel controls={false} pause={false}>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('./Assets/fruits-secs.jpg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('./Assets/Fruits-secs1.jpeg')}
                                fluid rounded
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default Action2;
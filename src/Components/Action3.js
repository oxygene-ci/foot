import React from "react";
import Navbars from "./Navbars";
import { Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";

function Action3 () {
    return (
        <>
            <Navbars />
            <Row className="pt-4 m-5">
                <Col sm={5}>
                    <Carousel controls={false} pause={false}>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('./Assets/fruitconserve.jpg')}
                                alt="First slide"
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item data-bs-interval="5">
                            <img
                                className="image d-block"
                                src={require('./Assets/fruit-en-conserve.jpg')}
                                alt="Second slide"
                                style={{ height: 500, width: 750 }}
                            />
                        </Carousel.Item>
                    </Carousel>
                    {/* <Image src={require('./Assets/img1.jpeg')} fluid
                    rounded
                className="h-900 w-250" /> */}
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">Fruits en conserve</h1>
                    <p className="mt-4">est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais s’est aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Action3;
import React from "react";
import { Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";
import Navbars from "./Navbars";

function Action1 () {
    return (
        <>
            <Navbars />
        <Row className="pt-5 m-5">
            <Col sm={6}>
                <h1 className="font-weight-light">Confitures</h1>
                    <p className="mt-4">La confiture est un gel obtenu par cuisson de fruits avec du sucre1 : le chauffage extrait (et dégrade un peu) les molécules de pectine des parois cellulaires, qui se réassocient lors du refroidissement, surtout si le milieu est un peu acide, et s'il contient plus de 45 % de saccharose ("sucre de table"). C'est une technique de conservation des aliments, et c'est également un moyen de consommer certains fruits astringents comme le coing ou amers comme la bigarade.

                        La confiture peut être utilisée pour agrémenter des beignets, des tartines, les yaourts nature, etc</p>
            </Col>
            <Col sm={5}>
                <Carousel controls={false} pause={false}>
                    <Carousel.Item data-bs-interval="5">
                        <img
                            className="image d-block"
                            src={require('./Assets/Confit1.jpg')}
                            fluid rounded
                            style={{ height: 500, width: 750 }}
                        />
                    </Carousel.Item>
                    <Carousel.Item data-bs-interval="5">
                        <img
                            className="image d-block"
                                src={require('./Assets/Confiture.jpg')}
                                fluid rounded
                            style={{ height: 500, width: 750 }}
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
            </Row>
            <Footer/>
        </>
    )
}

export default Action1;
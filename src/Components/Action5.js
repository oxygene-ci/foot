import React from "react";
import Navbars from "./Navbars";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "./Footer";

function Action5 () {
    return (
        <>
            <Navbars />
            <Container>
                <Row className="pt-4 m-5">
                    <Col sm={6}>
                        <Image src={require('./Assets/sirop_jus.jpg')} fluid
                            rounded
                            className="h-150 w-120" />
                    </Col>
                    <Col sm={5}>
                        <h1 class="font-weight-light"><b>Sirops et jus</b></h1>
                        <p class="mt-4">Des sirops sont obtenus à partir de betterave sucrière, de céréales, de plantes, d’arbres et de fruits suivant différentes techniques.
                            Le goût sucré et la couleur de ces sirops sont nuancés (translucide, ambré, brun, plus foncé ou coloré) suivant leur origine et le degré de raffinage utilisé.
                            Les sirops non-raffinés tels que le sirop de betterave sont riches en minéraux et souvent colorés ou le sirop de Garcinia kola d'origine africaine.
                            La plupart de ces sirops sont connus depuis longtemps et ont été développés par diverses civilisations tel que l’amazake, d’origine asiatique, qui est obtenu par le mélange de riz et de kôji3, d'autres, tels que le sirop de maïs, sont de facture plus récente.
                            Le jus est une boisson issue de l'extraction ou du pressage du liquide naturel contenu dans les fruits et légumes
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Action5;
import React from "react";
import BootstrapCarousel from "./BootstrapCarousel";
import Navbars from './Navbars'
import TopBar from './TopBar'
import Footer from "./Footer";
import { Container, Row, Col, CardGroup, Card, Image } from "react-bootstrap";



function Home() {
    return (
        <>
            {/* <TopBar />       */}
            <Navbars />
            <BootstrapCarousel />
                <main>
                         <Container>
                            <Row className="px-4 my-5">
                                <Col sm={7}>
                                    <Image src={require('./Assets/img1.jpeg')} fluid
                                    rounded
                                    className="h-750 w-250"/>
                                </Col>
                                <Col sm={5}>
                                    <h1 class="font-weight-light">Melan's</h1>
                                    <p class="mt-4">est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais s’est aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                                </Col>
                            </Row>
                            <Row>
                                    <Card  className="text-center bg-secondary text-white my-5 py-4">
                                        <Card.Body>This is some text within a card body.</Card.Body>
                                    </Card>
                            </Row>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={require('./Assets/miel.jpg')} />
                                    <Card.Body>
                                    <Card.Title><b>Miel</b></Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Dernière mise à jour il y a 3 minutes</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={require('./Assets/fruit-en-conserve.jpg')} />
                                    <Card.Body>
                                    <Card.Title><b>Fruit en conserve</b></Card.Title>
                                        <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Dernière mise à jour il y a 3 minutes</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={require('./Assets/Confiture.jpg')} />
                                    <Card.Body>
                                <Card.Title><b>Confitures</b></Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Dernière mise à jour il y a 3 minutes</small>
                                    </Card.Footer>
                                </Card>
                             </CardGroup>
                        </Container>
                </main>
            <Footer />
        </>
    );
}

export default Home
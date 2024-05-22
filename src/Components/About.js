import React from "react";
import { useNavigate } from "react-router-dom";
import {Container, Row, Col, Carousel, Button, Card, Navbar} from 'react-bootstrap';
import Footer from "./Footer";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Navbars from "./Navbars";

function About () {

  //   const navigate = useNavigate();
  //   function onClick(){
  //   navigate("/")
  // }
     return (
       <main>
         <Navbars />
         <Container>
            <Row className="px-4 my-5">
                <Col sm={7}>
                    <h1 className="font-weight-light">Melan's</h1>
                    <p className="mt-4">est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais s’est aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                </Col>
                <Col sm={5}>
                  <Carousel fade>
                      <Carousel.Item>
                        <img
                        className="image d-block"
                        src={require('./Assets/img1.jpeg')}
                        alt="Second slide"
                        style={{height:400, width:500}}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                        className="image d-block"
                        src={require('./Assets/miel.jpg')}
                        alt="Second slide"
                        style={{height:400, width:500}}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                        className="image d-block"
                        src={require('./Assets/Confiture.jpg')}
                        alt="Second slide"
                        style={{height:400, width:500}}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                        className="image d-block"
                        src={require('./Assets/fruit-en-conserve.jpg')}
                        alt="Second slide"
                        style={{height:400, width:500}}
                        />
                      </Carousel.Item>
                  </Carousel>
                </Col>
            </Row>
        <Row className="px-4 my-5">
          <Col sm={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./Assets/imgfruit.jpg')} />
              <Card.Body>
                   <Card.Title><b>Fruit en conserve</b></Card.Title>
                <Card.Text>
                     Les fruits sont ensuite mis en conserve dans des bocaux stérilisés pour une conservation à long terme.
                </Card.Text>
                <Button variant="success">Cliquez ici</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Assets/Confiture.jpg')} />
                  <Card.Body>
                   <Card.Title><b>Confiture</b></Card.Title>
                    <Card.Text>
                     Confiture de fraises composée de plusieurs variétés de fraises
                    </Card.Text>
                  <Button variant="outline-warning" >Cliquez ici</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Assets/fruits-secs.jpg')} />
                  <Card.Body>
                   <Card.Title><b>Fruits séchés</b></Card.Title>
                    <Card.Text>
                     Les fruits séchés ou fruits déshydratés sont des fruits frais ayant subi une déshydratation.
                    </Card.Text>
                    <Button variant="primary">Cliquez ici</Button>
                  </Card.Body>
              </Card>
          </Col>
          <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Assets/miel.jpg')} />
                <Card.Body>
                   <Card.Title><b>Miel</b></Card.Title>
                      <Card.Text>
                     Savoureuse sélection de miels d'apiculteurs bretons.
                    </Card.Text>
                  <Button variant="outline-danger">Cliquez ici</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
            </Container>
            <Footer />
            {/* <div className="text-center p-5">
            <Button onClick={onClick} style={{ backgroundColor: "#1166A7", color: "white" }} >Retour à l'acceuil</Button>
          </div> */}
        </main>
        
    );
}

export default About
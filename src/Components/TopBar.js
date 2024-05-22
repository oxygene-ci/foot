import React from 'react';
import { GrPhone, GrMailOption, } from "react-icons/gr"; 
import { FaMobileAlt } from "react-icons/fa";
import {Container, Row, Col} from 'react-bootstrap';

function TopBar() {
  return (
    <Container>
      <Row className='text-center'>
        <Col><FaMobileAlt color='#666'/> +225 07 08 03 01 63</Col>
        <Col><GrPhone/> +225 01 01 13 14 933</Col>
        <Col><GrMailOption/> pi@petroivoire.ci</Col>
      </Row>
    </Container>
    );
}
export default TopBar;
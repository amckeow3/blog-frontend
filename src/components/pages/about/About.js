import React from "react";
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return(
        <div className="about_sec d-block d-flex">
            <Container fluid>
                <Row className="about_sec_content">
                    <Col sm={5} className="left_col">
                        <div className="left_col_content">
                            <Row>
                                <h1>about me</h1>
                            </Row>
                        
                        </div>
                    </Col>
                    <Col sm={7} className="right_col">
                        <Row>
                            <div className="right_col_content">
                                <Col>
                                    <picture>
                                        <img src={require("../../../images/Screenshot 2022-01-20 184448.jpg")} alt=""/> 
                                    </picture>
                                </Col>
                                <Col>
                                    <picture>
                                        <img src={require("../../../images/17202682_1672679406365447_6002183217983859957_n.jpg")} alt=""/> 
                                    </picture>
                                </Col>
                                <Col>
                                    <picture>
                                        <img src={require("../../../images/lilo 4 copy.png")} alt=""/> 
                                    </picture>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
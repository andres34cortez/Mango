import { Col, Row } from 'jsxstyle';
import React from 'react';
import './Footer.css';


const Footer=()=>{
return(
    <Row className="Todo">
        <Row >
            <Col>
            <img src="" alt="" className="icono" />
            <div className="textoF">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            <div className="rsociales">
                <img>
                </img>
                <img>
                </img>
            </div>
            </Col>
            
            <Col>
                    <Col>
                        <Row>
                            1
                        </Row>
                        <Row>
                            2
                        </Row>
                        <Row>
                            3
                        </Row>  
                    </Col>
                    <Col>
                        <Row>
                            4
                        </Row>
                        <Row>
                            5
                        </Row>
                        <Row>
                            6
                        </Row>  
                    </Col>
                    <Col>
                        <Row>
                            7
                        </Row>
                        <Row>
                            8
                        </Row>
                        <Row>
                            9
                        </Row>  
                    </Col>
            </Col>
        </Row>

        <Row>
            <p className="terminos">Terminos y Condiciones de uso | Politica de privacidad</p>
        </Row>
        <Row>
           <p className="site">www.mangoverde.site</p>
        </Row>


    </Row>
)
}

export default Footer;
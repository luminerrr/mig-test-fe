import { Card, Col, Container, Row } from "react-bootstrap";
import './sidecard.css';
import whiteHouse from '../../assets/house-white.png'

function SideCard(){
    
    return(
        <>
        <Card className="main-side-card">
            <Card.Body className="side-card-wrapper">
                <p className="side-card-header">Lokasi</p>
                <a className="green-text" href="#">Lihat semua</a>
                <Container className="row-wrapper">
                    <Row>
                        <Col className="green-box-1 px-2">
                            <img src={whiteHouse} alt="house icon" className="green-box-icon"/>
                            <div className="greenbox-text-wrapper">
                                <div className="test-text">
                                <p className="green-box-text-large">20</p>
                                <p className="green-box-text">Induk</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="green-box-2 px-2">
                            <img src={whiteHouse} alt="house icon" className="green-box-icon"/>
                            <div className="greenbox-text-wrapper">
                                <div className="test-text">
                                <p className="green-box-text-large">3</p>
                                <p className="green-box-text">Sub Lokasi Level 1 </p>
                                </div>
                            </div>
                        </Col> <Col className="green-box-3 px-2">
                            <img src={whiteHouse} alt="house icon" className="green-box-icon"/>
                            <div className="greenbox-text-wrapper">
                                <div className="test-text">
                                <p className="green-box-text-large">1</p>
                                <p className="green-box-text">Sub Lokasi Level 2</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        </>
    )

}

export default SideCard;
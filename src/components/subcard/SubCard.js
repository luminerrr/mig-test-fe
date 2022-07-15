import './subcard.css';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import visaPicture from '../../assets/visa.png'
import trash from '../../assets/Trash.png';
import edit from '../../assets/PencilSimpleLine.png';

function SubCard(){

    return(
        <>
        <Card className='position-absolute subcard'>
            <Container className='bank-wrapper'>
                <Card.Title className='bank-title'>
                    Akun Bank
                    <Button variant='success' className='add-bank'>+ Tambah Akun Bank</Button>
                </Card.Title>
                <Card.Body>
                    <Container className='bank-content-wrapper'>
                        <Row className='bank-row'>
                            <Col lg={3}>
                                <img src={visaPicture} alt="visa" className='bank-picture'/>
                            </Col>
                            <Col lg={5} className='bank-detail-wrapper'>
                                <Row>
                                    <p className='bank-name'>Bank KB Bukopin</p>
                                </Row>
                                <Row>
                                    <p className='bank-owner'>**** 0876 - Yusron Taufiq</p>
                                    <p className='bank-currency'>IDR</p>
                                </Row>
                            </Col>
                            <Col lg={3}>
                                <img src={trash} alt='trash' className='trash-icon'/>
                                <img src={edit} alt='edit' className='edit-icon'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <img src={visaPicture} alt="visa" className='bank-picture'/>
                            </Col>
                            <Col lg={5} className='bank-detail-wrapper'>
                                <Row>
                                    <p className='bank-name'>Bank KB Bukopin</p>
                                </Row>
                                <Row>
                                    <p className='bank-owner'>**** 0876 - Yusron Taufiq</p>
                                    <p className='bank-currency'>IDR</p>
                                </Row>
                            </Col>
                            <Col lg={3}>
                                <img src={trash} alt='trash' className='trash-icon'/>
                                <img src={edit} alt='edit' className='edit-icon'/>
                            </Col>
                        </Row>
                        
                    </Container>
                    
                </Card.Body>
                
            </Container>
        </Card>
        </>
    )

}

export default SubCard;
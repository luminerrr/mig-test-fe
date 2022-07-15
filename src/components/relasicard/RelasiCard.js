import './relasicard.css';
import { Card, Col, Container, Row } from "react-bootstrap";
import shareIcon from '../../assets/Graph.png'

function RelasiCard(){

    return(
        <>
        <Card className='relasi-card'>
            <Container className='relasi-wrapper'>
                <Card.Title className='relasi-title'>
                    Relasi
                    <a className='add-relasi' href='#'>Lihat semua</a>
                </Card.Title>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col lg={2}>
                                <img src={shareIcon} alt='share' className='relasi-icon'/>
                            </Col>
                            <Col lg={10}>
                                <p className='relasi-number'>20</p>
                                <p className='relasi-description'>Memiliki</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                                <img src={shareIcon} alt='share' className='relasi-icon'/>
                            </Col>
                            <Col lg={10}>
                                <p className='relasi-number'>108</p>
                                <p className='relasi-description'>Menggunakan</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                                <img src={shareIcon} alt='share' className='relasi-icon'/>
                            </Col>
                            <Col lg={10}>
                                <p className='relasi-number'>67</p>
                                <p className='relasi-description'>Meminjam</p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Container>
            
        </Card>
        </>
    )

}

export default RelasiCard;
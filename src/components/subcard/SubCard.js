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
                        <img src={visaPicture} alt="visa" className='bank-picture'/>
                        <p className='bank-name'>Bank KB Bukopin</p>
                        <div className='edit-icon'>
                            <img src={trash} alt='trash' className='trash-icon'/>
                            <img src={edit} alt='edit' className='trash-icon'/>
                        </div>
                        <p className='bank-owner'>**** 0876 - Yusron Taufiq</p>
                        <p className='bank-currency'>IDR</p>
                    </Container>
                    
                </Card.Body>
                
            </Container>
        </Card>
        </>
    )

}

export default SubCard;
import './aktivitascard.css';
import {Card, Container, Row} from 'react-bootstrap';

function AktivitasCard(){

    return(
        <>
        <Card className='aktivitas-card'>
            <Container className='aktivitas-card-wrapper'>
                <Card.Title className='aktivitas-title'>
                    Aktivitas
                </Card.Title>
                <Card.Body>
                    <Container>
                        <Row>
                            <p className='aktivitas-list'>Yusron baru saja menambahkan lokasi baru di kantor cabang Jagakarsa</p>
                            <p className='timestamp-aktivitas'>Hari ini, 06:00</p>
                        </Row>
                        <Row>
                            <p className='aktivitas-list'>Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</p>
                            <p className='timestamp-aktivitas'>Kemaren, 17:32</p>
                        </Row>
                        <Row>
                            <p className='aktivitas-list'>Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi</p>
                            <p className='timestamp-aktivitas'>Kemaren, 17:32</p>
                        </Row>
                    </Container>
                </Card.Body>
            </Container>
        </Card>
        </>
    )

}

export default AktivitasCard;
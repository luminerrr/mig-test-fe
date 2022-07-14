import { Card } from "react-bootstrap";
import greenBuilding from '../../assets/green-building.jpg';
import pencilIcon from '../../assets/PencilSimpleLine.png';
import emailIcon from '../../assets/EnvelopeSimple.png';
import webIcon from '../../assets/green-globe.png';
import phoneIcon from '../../assets/Phone.png'
import './maincard.css'


function MainCard(){

    return(
        <>
        <Card className="main-card">
            <Card.Img variant="top" src={greenBuilding} className="card-picture-bg"></Card.Img>
            <Card.Body>
                <div className="card-head card-title">
                    Mitramas Infosys Global
                </div>
                <p className="card-sub-head">Layanan IT</p>
                <span className="edit-profile"><a href="#" className="edit-profile"><img src={pencilIcon} alt="pencil icon" className="edit-profile"/>Sunting Profil</a></span>
                <div className="main-content">
                    <div className="content-wrapper">
                        <p className="content-name">Status Perusahaan</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-name">Singkatan</p>
                        <p className="content">MIG</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-name">Alamat Perusahaan</p>
                        <p className="content">Jl. Tebet Raya No.42, Jakarta Selatan</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-name">Penanggung Jawab (PIC)</p>
                        <p className="content">John Doe</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-name">Tanggal PKP</p>
                        <p className="content">03 Maret 2021</p>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-name">Email</p>
                        <span className="content-contact"><a href="#" className="content-contact"><img src={emailIcon} alt="pencil icon" className="content-contact"/>mig@mitrasolusi.group</a></span>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-name">No. Telp</p>
                        <span className="content-contact"><a href="#" className="content-contact"><img src={phoneIcon} alt="pencil icon" className="content-contact"/>021-5678-1234</a></span>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-name">Situs Web</p>
                        <span className="content-contact"><a href="#" className="content-contact"><img src={webIcon} alt="pencil icon" className="content-contact"/>mitramas.com</a></span>
                    </div>
                    
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default MainCard;
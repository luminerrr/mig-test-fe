import './headbar.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import globe from '../../assets/GlobeSimple.png'
import imgPhoto from '../../assets/img_photo.png'

function Headbar(){

    return(
        <>
        <Navbar className='headbar-main'>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href='#' className='list-item'>Perusahaan</Breadcrumb.Item>
                    <Breadcrumb.Item active className='list-item'>Mitramas Infosys Global</Breadcrumb.Item>
                </Breadcrumb>
                <Navbar.Text className='justify-content-end'>
                    <div className='profile-container'>
                        <Navbar.Text>
                            <a><img src={globe} className='profile-icon' alt='search-icon'/></a>
                            <a><img src={globe} className='profile-icon' alt='search-icon'/></a>
                            <a><img src={imgPhoto} className='profile-photo' alt='profile icon' /></a>
                            <a className='profile-name'>John Doe</a>
                        </Navbar.Text>
                    </div>
                </Navbar.Text>
            </Container>
        </Navbar>
        </>
    )

}

export default Headbar;
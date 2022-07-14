import { Container } from 'react-bootstrap';
import './sidebar.css';
import logo from '../../assets/BriefcaseMetal.png';
import house from '../../assets/House.png';

function Sidebar(){

    return(
        <>
        <div className="vertical-nav">
            <Container className='vertical-container'>
                <a href='#'> <img src="https://static.wixstatic.com/media/e817ec_be43f247d0d4454f9d29e2d22f8d4ff7~mv2.png/v1/fill/w_194,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mig.png" alt='logo' className='logo'/> </a>
                <img src={house} alt='' className='nav-icon'/>
                <img src={logo} alt='' className='nav-icon'/>
                <img src={logo} alt='' className='nav-icon'/>
                <img src={logo} alt='' className='nav-icon'/>
                <img src={logo} alt='' className='nav-icon'/>
            </Container>
        </div>
        </>
    )
}

export default Sidebar;
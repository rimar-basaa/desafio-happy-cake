import { Container, Navbar } from 'react-bootstrap';
import { BiHome, BiEnvelope } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navibar = () => {

    return (        
        <Navbar className="navbar" bg="danger" data-bs-theme="dark">

            <Container>                
                <Navbar.Collapse className="justify-content-start">
                    <BiHome className="icon ms-4" />              
                    <Link 
                        to="/"
                        className="text-white ms-1 me-4 text-decoration-none"
                        >Home
                    </Link>
                    <BiEnvelope className="icon" />
                    <Link 
                        to="/contacto"
                        className="text-white ms-1 text-decoration-none"
                        >Contacto
                    </Link>
                </Navbar.Collapse>
            </Container>
            <Navbar.Brand className="logo">Happy Cake</Navbar.Brand>            
            
        </Navbar>
    );
};

export default Navibar;
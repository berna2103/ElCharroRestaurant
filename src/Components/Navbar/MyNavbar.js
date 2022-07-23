import { Navbar, Nav, Container} from 'react-bootstrap'
import './mynavbar.css'
export default function MyNavbar(){
    return(
     <>
      <Navbar expand='md' className='bg-danger'>
        <Container>
          <Navbar.Brand className='fw-bolder rounded-3 bg-light p-3'  href="/">
           <img
             alt=""
             src={require('./Assets/pepper.png')}
             width="50"
             height="50"
             className="d-inline-block align-middle"
           />{' '}<span className='my-auto'>El Charro</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Our Menu</Nav.Link>
              <Nav.Link href="/#promotions">Promotions</Nav.Link>
              <Nav.Link href="/#location">Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </>
    )
}
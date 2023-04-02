import './Topbar.css'
import { Form, Button, Nav, Navbar, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';


function Topbar() {
  return (
    <div className='topNavbar'>
      <Navbar fixed='top' bg="info" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><h4>KR Social</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="search" style={{ maxHeight: '100px' }} navbarScroll>
            </Nav>
            <Form className="d-flex">
              <input type="search" placeholder="Search" className="me-2 searchStyle" aria-label="Search" />
              <Button variant="outline-success"><span className='styleLinks'>Search</span></Button>
            </Form>
            <Nav style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1"><span className='styleLinks'>Home</span></Nav.Link>
            <Nav.Link href="#action2"><span className='styleLinks'>Timeline</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='topbarIcons'>
            <div className='topbarIconsItems'>
              <FontAwesomeIcon icon={faPerson} width='30px' height='30px' />
              <span className='topbarIconsBadge'>3</span>
            </div>
            <div className='topbarIconsItems'>
              <FontAwesomeIcon icon={faEnvelope} width='30px' height='30px' />
              <span className='topbarIconsBadge'>6</span>
            </div>
            <div className='topbarIconsItems'>
              <FontAwesomeIcon icon={faBell} width='30px' height='30px' />
              <span className='topbarIconsBadge'>8</span>
            </div>
          </div>
            <img src="images/awert321.jpeg" alt='awer321' className='topbarimg' />
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar


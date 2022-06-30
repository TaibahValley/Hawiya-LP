import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../../assets/css/sidebar.css"
import Logo from "../../assets/imgs/svg/Logo"


function Navebar({changeLanguage, t}) {
  const test=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
  }
  return (
    <Navbar id="Navbar">
  <Container >
    {/* <img src={Logo}/> */}
    <Logo id="logo"/>
    <Navbar.Brand href="#home">Hawiya</Navbar.Brand>
    <Navbar.Toggle/>

    <Navbar.Collapse className="justify-content-center">
      <Nav >
        <Nav.Link href="#header">{t("Explore")}</Nav.Link>
        <Nav.Link href="#Collections">{t("Collections")}</Nav.Link>
        <Nav.Link href="#roadmap">{t("Roadmap")}</Nav.Link>
        <Nav.Link href="#Team">{t("Team")}</Nav.Link>
        <Nav.Link href="#Contact">{t("Contact")}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <button className="lang" onClick={() => changeLanguage('ar')}>ع</button>
      <button className="lang" onClick={() => changeLanguage('en')}>en</button>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default Navebar
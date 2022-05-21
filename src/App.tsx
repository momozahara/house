import React, { useEffect, useRef } from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './router';
import './App.css';

const App = () => {
  const navRef = useRef<HTMLElement>(null);

  const windowSizeHandler = () => {
    if (window.innerWidth <= 992) {
      navRef.current?.classList.add('bg-light');
      return;
    }
    navRef.current?.classList.remove('bg-light');
  }

  const windowScrollHandler = () => {
    if (window.innerWidth <= 992) {
      return;
    }
    
    if (window.scrollY !== 0) {
      navRef.current?.classList.add('bg-light');
      return;
    }
    navRef.current?.classList.remove('bg-light');
  }
  
  useEffect(() => {
    windowSizeHandler();
    window.addEventListener('resize', windowSizeHandler);
    window.addEventListener('scroll', windowScrollHandler);
  })
  
  return (
    <BrowserRouter>
      <Navbar fixed='top' expand="lg" ref={navRef}>
          <Link className='navbar-brand' to="/">House</Link >
          <Button variant='light' className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id='navbarNav'>
            <Nav as='ul'>
              <Nav.Item as='li'>
                <Link className='nav-link' to='/'>Home</Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Link className='nav-link' to='/product'>Product</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div className="banner">
        <h1 className="banner-header no-select">House</h1>
      </div>
      <Router />
      <div className="footer">
        <div className='text-center'>
          <p style={{ color: 'black' }}><i className='copy'>&copy;</i> 2020 House</p>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

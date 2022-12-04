import './navbar.css' 
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbar className=' bg-local' >
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src='/images/logo/logo.png'
              height='70'
              alt=''
              loading='lazy'
              className=' p-0'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
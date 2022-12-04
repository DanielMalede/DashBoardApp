import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App({img,sold,name}) {
  return (
    <MDBCard >
      <MDBCardImage className="imgCards" src={img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle><b><i>{name}</i></b></MDBCardTitle>
        <MDBCardText className=' text-center'>
         <b> Ware Sold: {sold}</b>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
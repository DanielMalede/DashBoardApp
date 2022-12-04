import './cardSum.css'
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
} from 'mdb-react-ui-kit';
export default function CardSum({item}) {
  let num = 0
  item.map(data=>num+=data.sold_in_a_year)
  return (
    <MDBCard alignment='center'>
      <MDBCardHeader><h4> Sum of all orders this year</h4></MDBCardHeader>
      <MDBCardBody>
        <MDBCardText className='mt-3 d-flex align-self-center justify-content-center'><b className='display-1 mx-5 d-flex align-self-center'>{num}</b><b className='sumTotal mb-4 display-6'>87%</b></MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'></MDBCardFooter>
    </MDBCard>
  );
}
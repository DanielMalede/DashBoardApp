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
      <MDBCardHeader>Sum of all orders this year</MDBCardHeader>
      <MDBCardBody>
        <MDBCardText><b className=' display-1'>{num}</b></MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'></MDBCardFooter>
    </MDBCard>
  );
}
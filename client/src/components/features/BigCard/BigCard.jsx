import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
let ToolName = ["Guitars:","Piano:","Drums:","Bass guitar:","Violin:","Saksofon:"]
export default function BigCard({item}) {
  console.log();
  return (
    <MDBCard>
      <MDBCardBody className=' text-start'>
        <MDBCardTitle>Total number of orders throughout the year</MDBCardTitle>
        
          {item.map((items,i)=>
          {return(
            <MDBCardText key={i}>
              <b>{ToolName[i]} {items.sold_in_a_year}</b><br></br>
            </MDBCardText>
          )} )}
      </MDBCardBody>
    </MDBCard>
  );
}
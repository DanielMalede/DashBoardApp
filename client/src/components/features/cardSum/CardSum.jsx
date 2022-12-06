import "./cardSum.css";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import Circle from "../circle/Circle";
export default function CardSum({ item }) {
  let num = 0;
  item.map((data) => (num += data.sold_in_a_year));
  return (
    <MDBCard  alignment="center">
      <MDBCardHeader>
        <h4> Sum of all orders this year</h4>
      </MDBCardHeader>
      <MDBCardBody className="text-center flex-column justify-content-center " >
        <MDBCardText className="mt-3 d-flex align-self-center justify-content-center">
          <Circle />
        </MDBCardText>
        <MDBCardText ><b className='display-1 mx-5 d-flex align-self-center text-center justify-content-center'>{num}</b></MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className="text-muted"></MDBCardFooter>
    </MDBCard>
  );
}

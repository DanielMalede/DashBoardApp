import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Table({ item }) {
  return (
    <MDBTable responsive bordered borderColor="primary" hover className=" mt-5">
      <MDBTableHead>
        <tr>
          <th scope="col">Order Number</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Delivery time</th>
          <th scope="col">Number of products</th>
          <th scope="col">Total</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {item.map((data,i) => {
          return (
              <tr key={i}>
                <td>{data.orderNumber}</td>
                <td>{data.Name}</td>
                <td>{data.Address}</td>
                <td>{data.deliveryTime}</td>
                <td>{data.numberOfProduct}</td>
                <td>{data.total}</td>
              </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}

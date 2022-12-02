import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  PieChart,
  LineChart,
  AreaChart,
  BarChart,
  DoughnutChart,
} from "../../features/index";
export default function Home() {
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="3">
            <LineChart />
          </MDBCol>
          <MDBCol size="3">
            <AreaChart />
          </MDBCol>
          <MDBCol size="3">
            <BarChart />
          </MDBCol>
          <MDBCol size="3">
            <DoughnutChart />
          </MDBCol>
          <MDBCol size="3">
            <PieChart />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

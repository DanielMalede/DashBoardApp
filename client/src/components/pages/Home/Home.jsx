import "./home.css";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  PieChart,
  LineChart,
  AreaChart,
  BarChart,
  DoughnutChart,
  Card,
  NavBar,
} from "../../features/index";
import { useDataContext } from "../../../context/dataContext";

const cardTitle = ["Orders", "Products", "Info Pages", "Classes", "Category"];
export default function Home() {
  const {infoPages, products, orders } = useDataContext();
  console.log(products);
  return (
    <div>
      <NavBar />
      <MDBContainer className=" mt-5">
        {/* <MDBRow className=" d-flex">
          {infoPages.map((item, i) => {
            return (
              <MDBCol key={i} xl="2" lg="3" md="6" sm="6">
                <Card {...item} />
              </MDBCol>
            );
          })}
        </MDBRow> */}

        <AreaChart item={orders} />

        <BarChart item={products}/>
        <MDBRow className=" mt-5 pt-5 d-flex justify-content-center">
          <MDBCol className=" col-md-4">
            <div className="DoughnutChart text-center px-md-5">
              <DoughnutChart item={products} />
            </div>
          </MDBCol>
          <MDBCol className=" col-md-4 ">
            <div className="DoughnutChart text-center px-md-5">
              <PieChart item={products} />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

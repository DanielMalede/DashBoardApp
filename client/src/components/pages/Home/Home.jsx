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
  CardSum,
  BigCard,
  HorizontalBarChart
} from "../../features/index";
import { useDataContext } from "../../../context/dataContext";

const cardTitle = ["Orders", "Products", "Info Pages", "Classes", "Category"];
export default function Home() {
  const { infoPages, products, orders } = useDataContext();
  return (
    <div>
      <NavBar />
      <>

        <MDBContainer fluid>
          <MDBRow className=" mt-5 mb-5 justify-content-end">
            <MDBCol className="heightChart col-md-4 text-end ">
              <div className="px-0">
                <BarChart item={orders} />
              </div>
            </MDBCol>
            <MDBCol className="heightChart col-md-3 text-end justify-content-end">
              <div className="DoughnutChart">
                <DoughnutChart item={products} />
              </div>
            </MDBCol>
            <MDBCol className="heightChart col-md-3 text-end justify-content-end mx-md-5">
              <div className="DoughnutChart">
                <PieChart item={products} info={infoPages}/>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer >
          <MDBRow className="align-self-center justify-content-center d-flex" size="12" xl="3" lg="4" md="6" sm="12">
            <MDBCol>
              <MDBRow>
                <MDBCol className="mt-4 " size="12">
                  <CardSum item={products}/>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className=" align-self-center justify-content-center d-flex">
              <BigCard item={products} className="w-100"/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* <MDBContainer className="mt-4">
          <MDBRow className=" d-flex">
            {infoPages.map((item, i) => {
              return (
                <MDBCol key={i} xl="2" lg="3" md="6" sm="6">
                  <Card {...item} />
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer> */}
        <HorizontalBarChart/>
        <AreaChart item={orders} />
        
        <AreaChart item={orders} /> 
      </>
    </div>
  );
}

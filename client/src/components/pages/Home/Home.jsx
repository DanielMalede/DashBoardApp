import "./home.css";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  PieChart,
  AreaChart,
  BarChart,
  DoughnutChart,
  Card,
  NavBar,
  CardSum,
  BigCard,
  HorizontalBarChart,
  Footer,
  Table,
} from "../../features/index";
import { useDataContext } from "../../../context/dataContext";
import Map from "../../features/map/Map";

export default function Home() {
  const { infoPages, products, orders, financialSummary, users, ordersComing } =
    useDataContext();
  return (
    <div>
      <NavBar />
      <>
        <MDBContainer fluid>
          <MDBRow className=" mt-5 mb-5 justify-content-end">
            <MDBCol className="heightChart col-lg-12 col-xl-4 text-end ">
              <h2>Orders per day</h2>
              <div className="px-0">
                <BarChart item={orders} />
              </div>
            </MDBCol>
            <MDBCol className="heightChart col-lg-4 text-end col-xl-3 justify-content-end">
              <h2>Instruments quantity </h2>
              <div className="DoughnutChart">
                <DoughnutChart item={products} />
              </div>
            </MDBCol>
            <MDBCol className="heightChart col-lg-4 text-end col-xl-3 justify-content-end mx-md-5">
              <h2>Instruments sale amount </h2>
              <div className="DoughnutChart">
                <PieChart item={products} info={infoPages} />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow
            className="align-self-center d-flex"
            size="12"
            xl="3"
            lg="4"
            md="6"
            sm="12"
          >
            <MDBCol>
                <MDBCol className=" mt-5  pt-5" size="12">
                  <CardSum item={products} />
                </MDBCol>
            </MDBCol>
            <MDBCol className=" mx-5 justify-content-center flex-column">
              <MDBCol>
                <Map />
              </MDBCol>
              <MDBCol >
              <BigCard item={products} />
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <HorizontalBarChart className="pt-5" item={financialSummary} />
          <MDBRow className=" d-flex mb-5 pt-5">
            {infoPages.map((item, i) => {
              return (
                <MDBCol
                  className="mt-3"
                  size={4}
                  key={i}
                  xl="2"
                  lg="3"
                  md="6"
                  sm="6"
                >
                  <Card {...item} />
                </MDBCol>
              );
            })}
          </MDBRow>
          <AreaChart className="mt-5" item={users} />
          <h2 className="mt-5">Delivery Orders Track</h2>
          <Table item={ordersComing} />
        </MDBContainer>
        <Footer />
      </>
    </div>
  );
}

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

export default function Home() {
  const { infoPages, products, orders, financialSummary, users, ordersComing } =
    useDataContext();
  return (
    <div>
      <NavBar />
      <>
        <MDBContainer fluid>
          <MDBRow className=" mt-5 mb-5 justify-content-end">
            <MDBCol className="heightChart col-md-12 col-lg-4 text-end ">
              <h2>Orders per day</h2>
              <div className="px-0">
                <BarChart item={orders} />
              </div>
            </MDBCol>
            <MDBCol className="heightChart col-md-4 text-end col-lg-3 justify-content-end">
            <h2>Instruments quantity </h2>
              <div className="DoughnutChart">
                <DoughnutChart item={products} />
              </div>
            </MDBCol>
            <MDBCol className="heightChart col-md-4 text-end col-lg-3 justify-content-end mx-md-5">
            <h2>Instruments sale amount </h2>
              <div className="DoughnutChart">
                <PieChart item={products} info={infoPages} />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow
            className="align-self-center justify-content-center d-flex"
            size="12"
            xl="3"
            lg="4"
            md="6"
            sm="12"
          >
            <MDBCol>
              <MDBRow>
                <MDBCol className="mt-4 " size="12">
                  <CardSum item={products} />
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className=" align-self-center justify-content-center d-flex">
              <BigCard item={products} className="w-100" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <HorizontalBarChart className="pt-5" item={financialSummary} />
          <MDBRow className=" d-flex mb-5 pt-5">
            {infoPages.map((item, i) => {
              return (
                <MDBCol key={i} xl="2" lg="3" md="6" sm="6">
                  <Card {...item} />
                </MDBCol>
              );
            })}
          </MDBRow>
          <AreaChart className="mt-5" item={users} />
          <h2 className="mt-5">Orders coming soon</h2>
          <Table item={ordersComing} />
        </MDBContainer>
        <Footer />
      </>
    </div>
  );
}

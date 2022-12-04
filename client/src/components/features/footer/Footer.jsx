import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="mt-5 text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol  md="12" className="mb-4 mb-md-0">
            A profit and loss statement (P&L), or income statement or statement
            of operations, is a financial report that provides a summary of a
            company’s revenues, expenses, and profits/losses over a given period
            of time.

            The P&L statement shows a company’s ability to generate sales,
            manage expenses, and create profits. It is prepared based on
            accounting principles that include revenue recognition, matching,
            and accruals, which makes it different from the cash flow statement.
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="">
          DataManage.com
        </a>
      </div>
    </MDBFooter>
  );
}

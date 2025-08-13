import React from "react";
import "../LayoutTest/base.css";
import "../LayoutTest/base_generated.css";
const Base = () => {
  //   return (
  //     <div className="base-wrapper">
  //       <section className="section-top-banner">
  //         <h1>Welcome to the Dashboard</h1>
  //       </section>
  //       <section className="section-surface-1">
  //         <div className="container-grid-1">
  //           <h2>Dashboard Content</h2>
  //         </div>
  //       </section>
  //     </div>
  //     );

  //   return (
  //     <div className="base-wrapper">
  //       <section className="section-top-banner"></section>
  //       <section className="section-surface-1">
  //         <div className="container-grid-1">
  //           <div className="table-toolbar-outline"></div>
  //         </div>
  //       </section>
  //     </div>
  //     );

  return (
    <div className="base-wrapper">
      <section className="section-top-banner"></section>
      <section className="section-surface-1">
        <div className="container-grid-1">
          <div className="table-toolbar-outline"></div>
          <div className="table-separator"></div>
          <table id="invoice-table" className="invoice-table">
            <thead className="invoice-table-thead" style={{ top: "106px" }}>
              <tr className="invoice-table-tr">
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
                <th>Column 6</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((_, i) => (
                <tr className="invoice-table-row" key={i}>
                  <td>Row {i + 1} - 1</td>
                  <td>Row {i + 1} - 2</td>
                  <td>Row {i + 1} - 3</td>
                  <td>Row {i + 1} - 4</td>
                  <td>Row {i + 1} - 5</td>
                  <td>Row {i + 1} - 6</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
export default Base;

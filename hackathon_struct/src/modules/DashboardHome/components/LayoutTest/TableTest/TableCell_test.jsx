import React from "react";

const TableCell_test = ({ children, style, cName }) => (
  <td className={cName}>
    <div className="tdcontentwrapper" style={style}>
      <span className="tdcontentspan">{children}</span>
    </div>
  </td>
);

export default TableCell_test;

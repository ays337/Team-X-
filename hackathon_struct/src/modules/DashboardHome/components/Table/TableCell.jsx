const TableCell = ({ children, style }) => (
  <td className="tdbodyleftstyles">
    <div className="tdcontentwrapper" style={style}>
      <span className="tdcontentspan">{children}</span>
    </div>
  </td>
);

export default TableCell;

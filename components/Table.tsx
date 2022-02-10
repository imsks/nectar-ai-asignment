import { data } from '../data';
import TableRow from './Row';

const TableContainer = () => {
  return (
    <table>
      {data.map((row, rowIndex) => {
        return <TableRow row={row} key={rowIndex} />;
      })}
    </table>
  );
};

export default TableContainer;

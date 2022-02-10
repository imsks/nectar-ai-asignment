import { TableCellProps } from '../interfaces';

const TableCell = ({
  className,
  onMouseEnter,
  onMouseLeave,
  onDoubleClick,
  children,
}: TableCellProps) => {
  return (
    <td
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </td>
  );
};

export { TableCell };

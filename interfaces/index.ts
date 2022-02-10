export type CellType = {
  editable: boolean;
  label: string;
  hint?: string;
  icon?: string;
};

export interface TableRowProps {
  row: CellType[];
}

export interface TableCellProps {
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLTableDataCellElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLTableDataCellElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLTableDataCellElement>;
  children: React.ReactNode;
}

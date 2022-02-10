import React, { useState } from 'react';
import { TableRowProps } from '../interfaces';
import { TableCell } from './Cell';

const TableRow = ({ row }: TableRowProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showInputIndex, setShowInputIndex] = useState(null);

  const onDoubleClick = (columnIndex: number) => {
    setShowInput(true);
    setShowInputIndex(columnIndex);
  };

  return (
    <tr>
      {row.map((column, columnIndex) => {
        const { label, editable, hint, icon } = column;

        if (editable)
          return (
            <>
              <TableCell
                key={columnIndex}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`${isHovering ? 'td-hover' : ''}`}
                onDoubleClick={() =>
                  editable ? onDoubleClick(columnIndex) : null
                }
                children={
                  showInput && showInputIndex === columnIndex ? (
                    <input type="text" value={label} />
                  ) : (
                    label
                  )
                }
              />
            </>
          );

        if (icon) {
          return (
            <TableCell
              key={columnIndex}
              className={`tooltip`}
              children={
                <>
                  <td>{icon}</td>
                  <td>{label}</td>
                  {hint && <span className="tooltiptext">{hint}</span>}
                </>
              }
            />
          );
        }

        if (hint)
          return (
            <TableCell
              key={columnIndex}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`${isHovering ? 'td-hover' : ''} tooltip`}
              children={
                <>
                  <p>{label}</p>
                  <span className="tooltiptext">{hint}</span>
                </>
              }
            />
          );

        return <TableCell key={columnIndex} children={<p>{label}</p>} />;
      })}
    </tr>
  );
};

export default TableRow;

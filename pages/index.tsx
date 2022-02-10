import { useState } from 'react';
import { data } from '../data';

const IndexPage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showInputIndex, setShowInputIndex] = useState(null);

  const onDoubleClick = (columnIndex: number) => {
    setShowInput(true);
    setShowInputIndex(columnIndex);
  };

  // console.log(showInputIndex);

  return (
    <section>
      <table>
        {data.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((column, columnIndex) => {
                const { label, editable, hint, icon } = column;

                if (editable)
                  return (
                    <td
                      key={columnIndex}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className={`${isHovering ? 'td-hover' : ''}`}
                      onDoubleClick={() =>
                        editable ? onDoubleClick(columnIndex) : null
                      }
                    >
                      {showInput && showInputIndex === columnIndex ? (
                        <input type="text" value={label} />
                      ) : (
                        label
                      )}
                    </td>
                  );

                if (icon) {
                  return (
                    <td key={columnIndex} className={`tooltip`}>
                      <td>{icon}</td>
                      <td>{label}</td>
                      {hint && <span className="tooltiptext">{hint}</span>}
                    </td>
                  );
                }

                if (hint)
                  return (
                    <td
                      key={columnIndex}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className={`${isHovering ? 'td-hover' : ''} tooltip`}
                    >
                      {label}
                      <span className="tooltiptext">{hint}</span>
                    </td>
                  );

                return <td key={columnIndex}>{label}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default IndexPage;

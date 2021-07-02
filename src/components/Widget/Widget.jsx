import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import './Widget.css';

const Widget = ({
  name, setItems,
}) => {
  const changeItemColumn = (currentItem, columnName) => {
    setItems((prevState) => prevState.map((elem) => ({
      ...elem,
      column: elem.name === currentItem.name ? columnName : elem.column,
    })));
  };
  const [{ isDragging }, drag] = useDrag({
    item: { name },
    type: 'item',
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult?.name === 'Column 1') {
        changeItemColumn(item, 'Column 1');
      }
      if (dropResult?.name === 'Cell 1') {
        changeItemColumn(item, 'Cell 1');
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={drag}
      className="widget"
      style={{ opacity }}
    >
      { name }
    </div>
  );
};

Widget.propTypes = {
  name: PropTypes.string.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default Widget;

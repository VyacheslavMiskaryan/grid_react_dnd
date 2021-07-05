import React, { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import listToCell from '../../utils/listToCell';
import cellToCell from '../../utils/cellToCell';

import './WidgetStyles.sass';

const Widget = ({
  id, name, items, setItems,
}) => {
  const widgetListName = 'WidgetsColumn';
  const [{ isDragging }, drag] = useDrag({
    item: { id, name },
    type: 'item',
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult?.name) {
        if (dropResult.name === widgetListName) {
          listToCell(item, dropResult.name, setItems);
        } else {
          cellToCell(items, setItems, item, dropResult.name, widgetListName, id);
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = useMemo(() => (isDragging ? 0.4 : 1), [isDragging]);

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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    column: PropTypes.string.isRequired,
  })).isRequired,
  setItems: PropTypes.func.isRequired,
};

export default Widget;

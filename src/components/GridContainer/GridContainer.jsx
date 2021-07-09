import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import WidgetList from '../WidgetList';
import ItemsForDropArea from '../ItemsForDropArea';

import createGrid from './utils/createGrid';

import './GridContainerStyles.sass';

const GridContainer = ({ items, setItems }) => {
  const { columns, rows } = useSelector((state) => state.grid);
  const widgetsGrid = useMemo(() => createGrid(columns, rows), [columns, rows]);

  return (
    <div className="grid-container">
      {widgetsGrid.map((row) => (
        <div className="row" key={`key-${uuid()}`}>
          {row.map((widget) => (
            <WidgetList
              key={`cell-${uuid()}`}
              title={`Cell ${widget}`}
              className={`cell ${widget}`}
            >
              <ItemsForDropArea
                items={items}
                setItems={setItems}
                columnName={`Cell ${widget}`}
              />
            </WidgetList>
          ))}
        </div>
      ))}
    </div>
  );
};

GridContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    column: PropTypes.string.isRequired,
  })).isRequired,
  setItems: PropTypes.func.isRequired,
};

export default GridContainer;

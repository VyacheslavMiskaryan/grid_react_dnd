import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

const ItemsForDropArea = ({ items, setItems, columnName }) => (
  items
    .filter((item) => item.column === columnName)
    .map((item) => (
      <Widget
        key={`widget-${item.id}`}
        id={item.id}
        name={item.name}
        items={items}
        setItems={setItems}
      />
    ))
);

ItemsForDropArea.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    column: PropTypes.string.isRequired,
  })).isRequired,
  setItems: PropTypes.func.isRequired,
  columnName: PropTypes.string.isRequired,
};

export default ItemsForDropArea;

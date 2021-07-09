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
  items: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  setItems: PropTypes.func.isRequired,
  columnName: PropTypes.string.isRequired,
};

export default ItemsForDropArea;

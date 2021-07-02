import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import './WidgetList.css';

const WidgetList = ({ children, className, title }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={className}
      style={{
        background: isOver && 'rgba(133,190,246,0.5)',
      }}
    >
      {children}
    </div>
  );
};

WidgetList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

WidgetList.defaultProps = {
  children: null,
};

export default WidgetList;

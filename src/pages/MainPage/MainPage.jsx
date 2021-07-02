import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Widget from '../../components/Widget';
import WidgetList from '../../components/WidgetList';
import widgetsList from '../../constants';
import './MainPageStyles.css';

const MainPage = () => {
  const [items, setItems] = useState(widgetsList);
  const { columns, rows } = useSelector((state) => state.grid);

  const widgetsGrid = useMemo(() => {
    const gridRows = [];
    const grid = [];
    for (let i = 1; i <= columns * rows; i += 1) {
      gridRows.push(i);
      if (gridRows.length === columns) {
        const row = gridRows.splice(0, columns);
        grid.push(row);
      }
    }
    return grid;
  }, [columns, rows]);

  const returnItemsForColumn = (columnName) => (
    items
      .filter((item) => item.column === columnName)
      .map((item) => (
        <Widget
          key={item.id}
          name={item.name}
          setItems={setItems}
        />
      ))
  );

  return (
    <div className="container">
      <WidgetList title="Column 1" className="widget-list first-column">
        {returnItemsForColumn('Column 1')}
      </WidgetList>
      <div className="grid-container">
        {widgetsGrid.map((row) => (
          <div className="row" key={Math.random()}>
            {row.map((widget) => (
              <WidgetList
                key={Math.random()}
                title={`Cell ${widget}`}
                className={`cell ${widget}`}
              >
                {returnItemsForColumn(`Cell ${widget}`)}
              </WidgetList>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;

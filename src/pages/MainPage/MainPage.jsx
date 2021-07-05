import React, { useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { deleteGridAction } from '../../redux/actions';
import Widget from '../../components/Widget';
import WidgetList from '../../components/WidgetList';
import widgetsList from '../../constants';

import './MainPageStyles.sass';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const returnItemsForColumn = useCallback((columnName) => (
    items
      .filter((item) => item.column === columnName)
      .map((item) => (
        <Widget
          key={item.id}
          id={item.id}
          name={item.name}
          items={items}
          setItems={setItems}
        />
      ))
  ), [items]);

  const clearGrid = useCallback(() => {
    dispatch(deleteGridAction());
    history.push('/');
  }, [dispatch, history]);

  return (
    <div className="container">
      <Button
        variant="contained"
        color="primary"
        onClick={clearGrid}
        className="clear-button"
      >
        Clear grid
      </Button>
      <div className="main-container">
        <WidgetList title="WidgetsColumn" className="widget-list">
          {returnItemsForColumn('WidgetsColumn')}
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
    </div>
  );
};

export default MainPage;

import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import WidgetList from '../../components/WidgetList';
import GridContainer from '../../components/GridContainer';
import ItemsForDropArea from '../../components/ItemsForDropArea';

import { deleteGrid } from '../../redux/slices/gridSlices';

import widgetsList from '../../constants';

import './MainPageStyles.sass';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [items, setItems] = useState(widgetsList);

  const clearGrid = useCallback(() => {
    dispatch(deleteGrid());
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
          <ItemsForDropArea items={items} setItems={setItems} columnName="WidgetsColumn" />
        </WidgetList>
        <GridContainer
          items={items}
          setItems={setItems}
        />
      </div>
    </div>
  );
};

export default MainPage;

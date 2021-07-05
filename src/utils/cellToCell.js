import _ from 'lodash';

import listToCell from './listToCell';

const cellToCell = (
  allItems, changeAllItems, currentItem, dropContainerName, widgetListName, itemId,
) => {
  const destinationWidget = allItems.find((widget) => widget.column === dropContainerName);
  if (!destinationWidget) {
    listToCell(currentItem, dropContainerName, changeAllItems);
    return;
  }
  const sourceWidget = allItems.find((e) => e.id === itemId);
  const sourceCell = sourceWidget?.column;
  const destinationCell = destinationWidget?.column;
  const widgetsList = _.cloneDeep(allItems);
  if (sourceWidget.column !== widgetListName) {
    widgetsList.forEach((e) => {
      if (e.column === destinationCell) {
        e.column = sourceCell;
      } else if (e.column === sourceCell) {
        e.column = destinationCell;
      }
    });
  } else {
    widgetsList.forEach((e) => {
      if (e.column === destinationCell) {
        e.column = widgetListName;
      } else if (e.id === sourceWidget.id) {
        e.column = destinationCell;
      }
    });
  }
  changeAllItems(widgetsList);
};

export default cellToCell;

import { makeStyles } from '@material-ui/core/styles';

import colorSet from '../../colors';

const StartPageStyles = makeStyles(() => ({
  createGridForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  errorContainer: {
    height: 35,
    color: colorSet.errorText,
  },
}));

export default StartPageStyles;

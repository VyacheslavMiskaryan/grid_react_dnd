import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  Button, TextField, Typography, Container,
} from '@material-ui/core';

import { createGrid } from '../../redux/slices/gridSlices';

import StartPageStyles from './StartPageStyles';

const StartPage = () => {
  const styles = StartPageStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const handleCreateGrid = useCallback((data) => {
    const rows = Number(data.rows);
    const columns = Number(data.columns);
    if (rows > 0 && rows <= 10 && columns > 0 && columns <= 10) {
      dispatch(createGrid({ rows, columns }));
      history.push('/main_page');
    }
  }, [dispatch, history]);

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Create Grid
        </Typography>
        <form
          className={styles.createGridForm}
          onSubmit={handleSubmit(handleCreateGrid)}
          noValidate
        >
          <TextField
            type="number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="rows"
            label="rows"
            name="rows"
            inputProps={{ maxLength: 2, min: 1, max: 10 }}
            {...register('rows', {
              required: true, pattern: /^\d+$/, min: 1, max: 10,
            })}
          />
          <TextField
            type="number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="columns"
            label="columns"
            id="columns"
            inputProps={{ maxLength: 2, min: 1, max: 10 }}
            {...register('columns', {
              required: true, pattern: /^\d+$/, min: 1, max: 10,
            })}
          />
          <div className={styles.errorContainer}>
            {
              (errors.rows || errors.columns)
              && (
                <span>
                  Both fields are required,
                  you only need to enter numbers.
                  Both numbers must be less than 10
                </span>
              )
            }
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Create grid
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default StartPage;

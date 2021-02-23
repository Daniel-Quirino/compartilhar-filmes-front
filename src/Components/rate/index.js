import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

});

export default function HoverRating(props) {
  const [value, setValue] = useState(props.rating);
  const classes = useStyles();


  //function rateMovie() {}

  return (
    <div className={classes.root}>
      <Tooltip title="Avaliar" placement="bottom">
        <Rating
          name={`Rating Movie ${props.movieId}`}
          size="large"
          defaultValue={props.rating}
          value={value}
          precision={1}
          onChange={(event, newValue) => {
            setValue(newValue);
            props.rateMovie(props.movieId, newValue);
          }}
        />
      </Tooltip>
    </div>
  );
}
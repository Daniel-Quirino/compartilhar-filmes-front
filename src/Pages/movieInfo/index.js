import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";

function MovieInfo(props) {
  const classes = useStyles();
  const { movieId } = useParams();

  return (
    <>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  color: {
    color: 'white',
    backgroundColor: 'white'
  }
}));

export default MovieInfo;

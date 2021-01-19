import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const NewMovieCard = (props) => {

  const classes = useStyles();

  return (
      <div className={classes.container}>
        <img 
            className={classes.newMovieImg}
            src={props.image} 
            alt='imagem da divulgação do filme da Dora Aventureira'>
        </img>
        <Typography className={classes.title}>
          {props.title}
        </Typography>
      </div>
  );
}

const useStyles = makeStyles((theme) => ({
  newMovieImg: {
    borderRadius: '30px',
    width: '80%',
    marginTop: '25px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 'larger',
    fontWeight: '600',
    marginTop: '10px'
  }
}));

export default NewMovieCard;

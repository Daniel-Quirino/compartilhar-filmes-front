import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { formatarAltDeFilmes } from '../Utils/filme';

import './MovieCard.css';

const MovieCard = (props) => {

  const classes = useStyles();

  const renderNote = (props) => {
    return (
      <div className={classes.movieCardNote}>
        <span>{props.note}</span>
      </div>
    )
  }
  
  const renderViews = (props) => {
    return (
      <div className={classes.movieCardViews}>
        <span className={classes.movieCardViewsText}>{props.views}</span>
      </div>
    )
  }
  
  const renderMovieText = (props) => {
    return (
    <Typography className={classes.movieCardText}>
      {props.title}
    </Typography>
    )
  }
  

  return (
    <div className={classes.movieCardSize}>
      <div className={classes.movieCard}>
        {renderNote(props)}
        <img
          className='movie-card__image'
          src={props.image}
          alt={formatarAltDeFilmes(props.title)}
        />
        {renderViews(props)}
      </div>
      {renderMovieText(props)}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  homeImage: {
    width: '100%',
    height: '250px'
  },

  homeImageText: {
    position: "absolute",
    top: "300px",
    color: "white",
    backgroundColor: "none",
    fontSize: 'x-large',
    fontWeight: 'bold'
  },

  subItemTitle: {
    color: "white",
    fontSize: 'xx-large',
    fontWeight: 'bold',
    marginTop: '30px'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5%',
    paddingLeft: '12%',
    paddingRight: '12%'
  },

  mostRatedMoviesCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '30px'
  },

  movieCard: {
    width: '220px',
    height: '300px',
    position: 'relative',
  },

  movieCardSize: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  movieCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  },
  
  movieCardNote: {
    height: '26px',
    width: '37px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    position: 'absolute',
    right: '-7%',
    top: '-7%',
  },
  
  movieCardViews: {
    height: '20px',
    width: '40px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    position: 'absolute',
    right: '5%',
    bottom: '2%',
  },
  
  movieCardViewsText: {
    fontWeight: '700',
    marginBottom: '5px',
  },
  
  movieCardText: {
    fontSize: 'larger',
    color: 'white',
    fontWeight: '600',
    color: 'black'
  }
}));

export default MovieCard;

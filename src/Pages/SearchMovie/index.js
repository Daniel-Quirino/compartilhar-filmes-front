import React, { useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import MockMoviePicture from '../../assets/minha-mae-uma-peca.jpg';
import MovieCard from '../../Components/Card/MovieCard';
import moviesService from '../../service/movies'

import './styles.css'


function SearchMovie(props){
  const [ movies, setMovies ] = useState([])
  const classes = useStyles();

  useEffect( () => {
    async function fetchData() {
      try {
          const response = await moviesService();
          setMovies(response.movies)
      } catch (e) {
      }
  };
  fetchData();
  }, [])

  const renderMostRatedMovies = () => {
    return movies.filter(movie =>{
      return movie.title.toLowerCase().includes(props.searchMovie.toLowerCase().trim())
    })
    .map((movie) => {
      return (
        <div className={classes.mostRatedMoviesCard} key={movie.title+Math.random()}>
            <MovieCard 
              title={movie.title}
              note={movie.notes}
              image={movie.image}
              views={movie.views}
            />
        </div>
      );
    })
  }

  return (
    <div className={classes.container} >
      <div className={classes.mostRatedMoviesCard}>
        {renderMostRatedMovies()}
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
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
      marginTop: '25px'
    },
}));

export default SearchMovie;

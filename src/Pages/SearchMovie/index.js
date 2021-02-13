import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import MovieCard from '../../Components/Card/MovieCard';
import moviesService, { likeMovieService, rateMovieService } from '../../service/movies'
import LikeButton from '../../Components/LikeButton';
import Rate from '../../Components/rate';

import './styles.css'

function SearchMovie(props){

  async function fetchData() {
    try {
        const response = await moviesService();
        setMovies(response.movies)
    } catch (e) {
    }
  };

  const [ movies, setMovies ] = useState([])
  const classes = useStyles();
  
  async function likeMovie(id, status) {
    await likeMovieService(id, status);
    return await fetchData();
  }

  async function rateMovie(id, rate) {
    await rateMovieService(id, rate);
    return await fetchData();
  }

  useEffect( () => {
    fetchData();
  }, [])

  const renderMostRatedMovies = () => {
    return movies.filter(movie =>{
      return movie.title.toLowerCase().includes(props.searchMovie.toLowerCase().trim())
    })
    .map((movie) => {
      return (
        <div className={classes.mostRatedMoviesCard} key={movie.title+Math.random()}>
          <div>
            <MovieCard 
              title={movie.title}
              note={movie.notes}
              image={movie.image}
              views={movie.views}
            />
            <div className={classes.align}>
              <div onClick={() => likeMovie(movie._id, movie.likes)} > <LikeButton  likes={movie.likes}/>  </div>
              <Rate rateMovie={rateMovie} rating={movie.rate} movieId={movie._id}/>
            </div>
            
            </div>
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
      paddingRight: '12%',
      backgroundColor: 'white'
    },
    mostRatedMoviesCard: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '25px'
    },
    align: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center'
    }
}));

export default SearchMovie;

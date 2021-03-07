import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { getMovie, rateMovieService, likeMovieService } from '../../service/movies';
import MovieCard from '../../Components/Card/MovieCard'
import Rate from '../../Components/rate'
import LikeButton from '../../Components/LikeButton'
import ResumeCard from '../../Components/ResumeCard'
import Comments from '../../Components/comment'
  ;
function MovieInfo(props) {
  const classes = useStyles();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  async function fetchData() {
    try {
      const response = await getMovie(movieId);
      setMovie(response.movie)
    } catch (e) {
    }
  };

  async function rateMovie(id, rate) {
    await rateMovieService(id, rate);
    return await getMovie();
  }

  async function likeMovie(id, status) {
    await likeMovieService(id, status);
    return await fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={classes.container} >
      {console.log(movie)}

      { movie &&
        <>
          <div className={classes.mostRatedMoviesCard} key={movie.title + Math.random()}>
            <div>
              <MovieCard
                title={movie.title}
                note={movie.notes}
                image={movie.image}
                views={movie.views}
              />
              <div className={classes.align}>
                <div onClick={() => likeMovie(movie._id, movie.likes)} > <LikeButton likes={movie.likes} />  </div>
                <Rate rateMovie={rateMovie} rating={movie.rate} movieId={movie._id} />
              </div>
            </div>
            <ResumeCard title={movie.title} rate={movie.rate} description={movie.description} loggedUser={props.loggedUser} id={movie._id}/>
          </div>
          <div className={classes.comments}>
            <Comments comments={movie.comments} movieId={movie._id}/>
          </div>
        </>
    }
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5%',
    backgroundColor: 'gray'
  },
  mostRatedMoviesCard: {
    background: 'gray',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '25px'
  },
  align: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  comments: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default MovieInfo;


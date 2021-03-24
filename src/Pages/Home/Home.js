import React, { useState, useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 
import MovieCard from '../../Components/Card/MovieCard';
import NewMovieCard from '../../Components/NewMovieCard';
import NewUserCard from '../../Components/NewUserCard';
import ClaqueteImg from '../../assets/claquete.png';
import {getAllUsers} from '../../service/users/index';
import moviesService from '../../service/movies'

function Home(){
  const classes = useStyles();
  const [movies, setMovies] = useState([])

  const [newUsersOrderedByDate, setNewUsersOrderedByDate] = React.useState([]);

  async function fetchData() {
    try {
        const response = await moviesService();
        const orderMovies = response.movies.sort((a,b) =>  (a.notes < b.notes) ? 1 : ((b.notes < a.notes) ? -1 : 0))
        console.log(orderMovies)
        setMovies(orderMovies)
    } catch (e) {
    }
  };

  useEffect( () => {
    fetchData();
  }, [])

  useState(() => {
    async function getUsers(){
      await getAllUsers().then(res => {
        setNewUsersOrderedByDate(res.data.users);
      })
    }

    getUsers()
  }, [])


  let newMovies = [
    {
      title: 'Dora, a aventureira',
      image: 'https://i.pinimg.com/236x/00/f2/86/00f28680f7d2a71eb8b2b2137fbcc10b.jpg',
    },
    {
      title: 'Viúva Negra',
      image: 'https://www.kinoplex.com.br/filmes/images/cartaz/262x388/viuva-negra.jpg?1588641964',
    },
    {
      title: 'Sonic, o Filme',
      image: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
    },
  ]

  const renderMostRatedMovies = () => {

    return movies.map((movie, index) => {
      if(index>4) return;
      return (
        <div className={classes.mostRatedMoviesCard} key={movie.title+Math.random()}>
            <MovieCard 
              title={movie.title}
              note={movie.note}
              image={movie.image}
              views={movie.views}
              note={movie.notes}
            />
        </div>
      );
    })
  }

  const renderNewMovies = () => {
    return newMovies.map((movie) => {
      return (
        <NewMovieCard 
          title={movie.title}
          image={movie.image}
        />
      );
    })
  }

  const renderNewUsers = () => {

    const firstFive = []
    for(let i = newUsersOrderedByDate.length; i > newUsersOrderedByDate.length - 6; i--){
      if(newUsersOrderedByDate[i])
        firstFive.push(newUsersOrderedByDate[i])
    }
    return firstFive.map((user) => {
      return (
        <NewUserCard 
          name={user.name}
          age={user.age}
          city={user.city}
          _id={user._id}
        />
      );
    })
  }

  return (
    <div className={classes.container} >
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img 
          className={classes.homeImage}
          src={DoraAventureiraImg} 
          alt='imagem da divulgação do filme da Dora Aventureira'>
        </img>
        <Typography
          className={classes.homeImageText}
        >
          Filme em destaque
        </Typography>
      </div>

      <Typography
          className={classes.subItemTitle}
        >
          Filmes e séries mais bem avaliados
      </Typography>

      <div className={classes.mostRatedMoviesCard}>
        {renderMostRatedMovies()}
      </div>

      <div className={classes.background}>
        <div style={{padding: '0px 85px 0px 85px'}}>
          <Typography
              className={classes.subItemTitle}
            >
              Lançamentos
          </Typography>
          
          <div className={classes.newMovies}>
            {renderNewMovies()}
          </div>

          <Typography
              className={classes.subItemTitle}
            >
              Novos usuários
          </Typography>

          <div className={classes.newUsers}>
            {newUsersOrderedByDate.length > 0 && renderNewUsers()}
          </div>
        </div>

        <div className={classes.footer}>
          <img
            src={ClaqueteImg} 
            alt='imagem dae uma claquete'
            style={{
              width: '5%',
              marginRight: '90%'
            }}
          />
          <Typography className={classes.footerText}>
              Rede Social voltada para os amantes de Filmes!
          </Typography>
        </div>
      </div>
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
      top: "270px",
      color: "white",
      backgroundColor: "none",
      fontSize: 'x-large',
      fontWeight: 'bold'
    },
    subItemTitle: {
      color: "white",
      fontSize: 'xx-large',
      fontWeight: 'bold',
      marginTop: '35px'
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
      marginTop: '25px'
    },
    newMovies: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    newUsers: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    background: {
      background: 'linear-gradient(black 10%, grey)',
      width: '110%',
      alignSelf: 'center'
    },
    footer: {
      backgroundColor: '#8e8e8e',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    footerText: {
      fontSize: 'x-large',
      position: 'absolute'
    }
}));

export default Home;

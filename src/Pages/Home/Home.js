import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 
import MovieCard from '../../Components/Card/MovieCard';
import MockMoviePicture from '../../assets/minha-mae-uma-peca.jpg';
import NewMovieCard from '../../Components/NewMovieCard';
import NewUserCard from '../../Components/NewUserCard';
import ClaqueteImg from '../../assets/claquete.png'


function Home(){
  const classes = useStyles();

  let mostRatedMovies = [
    {
      title: 'O som do metal',
      note: '6.7',
      image: MockMoviePicture,
      views: '200',
    },
    {
      title: 'O som do metal',
      note: '6.7',
      image: MockMoviePicture,
      views: '200',
    },
    {
      title: 'O som do metal',
      note: '6.7',
      image: MockMoviePicture,
      views: '200',
    },
    {
      title: 'O som do metal',
      note: '6.7',
      image: MockMoviePicture,
      views: '200',
    }
  ]

  let newMovies = [
    {
      title: 'Dora, a aventureira',
      image: DoraAventureiraImg,
    },
    {
      title: 'Dora, a aventureira',
      image: DoraAventureiraImg,
    },
    {
      title: 'Dora, a aventureira',
      image: DoraAventureiraImg,
    },
  ]

  let newUsers = [
    {
      name: 'Lucas Silva',
      age: 21,
      address: 'Belo Horizonte, MG'
    },
    {
      name: 'Lucas Silva',
      age: 21,
      address: 'Belo Horizonte, MG'
    },
    {
      name: 'Lucas Silva',
      age: 21,
      address: 'Belo Horizonte, MG'
    },
    {
      name: 'Lucas Silva',
      age: 21,
      address: 'Belo Horizonte, MG'
    },
  ]

  const renderMostRatedMovies = () => {
    return mostRatedMovies.map((movie) => {
      return (
        <div className={classes.mostRatedMoviesCard} key={movie.title+Math.random()}>
            <MovieCard 
              title={movie.title}
              note={movie.note}
              image={movie.image}
              views={movie.views}
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
    return newUsers.map((user) => {
      return (
        <NewUserCard 
          name={user.name}
          age={user.age}
          address={user.address}
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
            {renderNewUsers()}
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

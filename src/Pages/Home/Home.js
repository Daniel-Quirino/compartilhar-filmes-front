import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 
import MovieCard from '../../Components/Card/MovieCard';
import MockMoviePicture from '../../assets/minha-mae-uma-peca.jpg';
import NewMovieCard from '../../Components/NewMovieCard';


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
    },
    {
      title: 'O som do metal',
      note: '6.7',
      image: MockMoviePicture,
      views: '200',
    },
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
    background: {
      background: 'linear-gradient(black 20%, grey)'
    }
}));

export default Home;

// import './Home.css';
// import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 
// import MovieCard from '../../Components/Card/MovieCard';

// const Home = (props) => {

//   return (
//     <div className='home'>
//       <div className='home__featured-image'>
//         <img 
//           className='home__image'
//           src={DoraAventureiraImg} 
//           alt='imagem da divulgação do filme da Dora Aventureira'>
//         </img>

//         <span className='home__image_text'>
//           Filme em Destaque
//         </span>
//       </div>

//       <div className='home__movies-cards'>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>

//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//       </div>

//     </div>
//   );
// }

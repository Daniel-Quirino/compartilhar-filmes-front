import './MovieCard.css';
import MockMoviePicture from '../../assets/minha-mae-uma-peca.jpg'

const Home = (props) => {
  return (
    <div className="movie-card">
      <img
        className='movie-card__image'
        src={MockMoviePicture}
        alt='Cartaz do filme minha mae é uma peça'
      />
      <p>{props.title}</p>
    </div>
  );
}

export default Home;

import './MovieCard.css';


const renderNote = (props) => {
  return (
    <div className='movie-card__note'>
      <span>{props.note}</span>
    </div>
  )
}

const renderViews = (props) => {
  return (
    <div className='movie-card__views'>
      <span className='movie-card__views__text'>{props.views}</span>
    </div>
  )
}

const renderMovieText = (props) => {
  return (
  <span className='movie-card__text'>{props.title}</span>
  )
}


const Home = (props) => {
  return (
    <div className="movie-card_size">
      <div className="movie-card">
        {renderNote(props)}
        <img
          className='movie-card__image'
          src={props.image}
          alt='Cartaz do filme minha mae é uma peça'
        />
        {renderViews(props)}
      </div>
      {renderMovieText(props)}
    </div>
  );
}

export default Home;

import './Header.css';
import movie from '../../assets/movie.png'
import Button from '../Button/Button'

const Home = () => {
  return (
    <div className="header">
      <img 
        className='header_movie-image'
        src={movie} 
        alt='plaqueta de filme aberta'>
      </img>

      <div className='header__buttons'>
        <Button 
          title='Cadastre-se'
          color='green'
        />
        <Button 
          title='Login'
          color='blue'
        />
      </div>
    </div>
  );
}

export default Home;

import './Home.css';
import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 
import MovieCard from '../../Components/Card/MovieCard';

const Home = (props) => {

  return (
    <div className='home'>
      <div className='home__featured-image'>
        <img 
          className='home__image'
          src={DoraAventureiraImg} 
          alt='imagem da divulgação do filme da Dora Aventureira'>
        </img>

        <span className='home__image_text'>
          Filme em Destaque
        </span>
      </div>

      <div className='home__movies-cards'>
          <div className='home__movies-card'>
            <MovieCard 
              title='O som do metal'
              note='6.7'
              image=''
              views='200'
            />
          </div>

          <div className='home__movies-card'>
            <MovieCard 
              title='O som do metal'
              note='6.7'
              image=''
              views='200'
            />
          </div>
          <div className='home__movies-card'>
            <MovieCard 
              title='O som do metal'
              note='6.7'
              image=''
              views='200'
            />
          </div>
          <div className='home__movies-card'>
            <MovieCard 
              title='O som do metal'
              note='6.7'
              image=''
              views='200'
            />
          </div>
          <div className='home__movies-card'>
            <MovieCard 
              title='O som do metal'
              note='6.7'
              image=''
              views='200'
            />
          </div>
      </div>

    </div>
  );
}

export default Home;


import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 

const useStyles = makeStyles(() => ({
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className='home'>
      <img 
        className='home__image'
        src={DoraAventureiraImg} 
        alt='imagem da divulgação do filme da Dora Aventureira'>
      </img>

      <span className='home__image_text'>
        Filme em Destaque
      </span>

    </div>
  );
}

export default Home;

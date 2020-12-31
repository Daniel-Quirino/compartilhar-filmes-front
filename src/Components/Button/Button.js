
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './Button.css';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: '20px'
  },
}));

const DefaultButton = (props) => {
  const classes = useStyles();

  return (
      <Button 
        variant="contained" 
        color={props.color === 'green' ? 'secondary' : 'primary'} 
        className={`button ${classes.button}`}
      >
        {props.title}
      </Button>
  );
}

export default DefaultButton;

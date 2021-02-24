import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const DefaultButton = (props) => {
  const classes = useStyles();

  
  return (
      <Button 
        variant="contained"
        color='inherit'
        className={props.button === 'signIn' ? classes.signInButton : classes.signUpButton}
        onClick={'' || props.onClick}
      >
        {props.title}
      </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  signUpButton: {
    borderRadius: '20px',
    backgroundColor: theme.palette.secondary.contrast,
    marginRight: 10,
    fontWeight: 600,
    color: 'white',
    '&:hover': {
      color: "black",
    },
  },
  signInButton: {
    borderRadius: '20px',
    backgroundColor: theme.palette.secondary.main,
    marginRight: 10,
    fontWeight: 600,
    color: 'white',
    '&:hover': {
      color: "black",
    },
  },
}));

export default DefaultButton;

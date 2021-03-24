import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { watchMovie, getUserById } from '../../service/users/index'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 500,
    maxWidth: 600,
    backgroundColor: '#363636',
    color: 'white'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  bad: {
    fontSize: 20,
    marginBottom: 12,
    color: 'red'
  },
  good: {
    fontSize: 20,
    marginBottom: 12,
    color: 'green'
  },
  ok: {
    fontSize: 20,
    marginBottom: 12,
    color: 'yellow'
  },
  watchButton: {
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    fontWeight: 500,
    '&:hover': {
      color: "black",
      backgroundColor: 'grey'
    },
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const [watched, setWatched] = React.useState(false);

  async function updateLoggedUser(){
    const user = await getUserById(props.loggedUser._id)
    localStorage.setItem("token", JSON.stringify(user.data.user))
    setWatched(true)
  }

  async function handleAlreadyWatched(){
    await watchMovie(props.loggedUser._id, {movie: props.id});
    await updateLoggedUser()
  }

  useEffect(() => {
    if(props.loggedUser){
      if(props.loggedUser.watched_movies){
        props.loggedUser.watched_movies.map((movie) => {
          console.log("MOVIE", movie._id)
          if(movie._id === props.id){
            setWatched(true)
          }
        })
      }else{
        setWatched(true)
      }
    }
  }, [])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Sinopse  do Filme:
        </Typography>
        <p className={props.rate <= 2 ? classes.bad : props.rate === 3 ? classes.ok : classes.good} >
          {props.title}
        </p>
        <Typography variant="body1" component="p">
          {props.description}
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '110px'}}>
          {watched ?
              <Button disabled className={classes.watchButton} onClick={() => handleAlreadyWatched()}> 
                Já assisti 😎
              </Button> :
              <Button className={classes.watchButton} onClick={() => handleAlreadyWatched()}> 
                Já assisti 😎
              </Button>
          }
          
        </div>
      </CardContent>
    </Card>
  );
}
import React, { useEffect, useState } from 'react'
import { makeStyles, Card, CardContent, Typography, CardMedia, Grid } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import Button from '@material-ui/core/Button';

import MovieCard from '../../Components/Card/MovieCard'

import userAvatar from '../../assets/user_profile.png'
import { getUserById } from '../../service/users/index'
import { useParams } from "react-router-dom";

function Profile(props) {

  const classes = useStyles();
  const [profileOwner, setProfileOwner] = useState(null)
  const [estante, setEstante] = useState(false)
  const { userId } = useParams();

  useEffect(() => {
    const getProfileOwner = async () => {
      try {
        const res = await getUserById(userId);
        setProfileOwner(res.data.user);
      } catch (error) {
        console.log("Error")
      }
    }

    async function fetchData() {
      await getProfileOwner();
    }
    fetchData();
  }, [userId])

  function handleEstante() {
    setEstante(!estante)
  }

  function renderWatchedMovies(){
    const movies = []
    profileOwner.watched_movies.map((movie) => {
      movies.push(
        <MovieCard 
            title={movie.title}
            note={movie.note}
            image={movie.image}
            views={movie.views}
            className={classes.movies}
        />
      )
    })

    return movies
  }

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          {profileOwner ?
            !estante ?
              <>
                <CardMedia
                  component="img"
                  height="150"
                  image={userAvatar}
                  title="Avatar do usuário"
                  classes={{
                    root: classes.avatar
                  }}
                />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button 
                    onClick={() => handleEstante()}
                    className={classes.estanteButton}
                  >
                      Estante de Filmes
                  </Button>
                </div>
                <div className={classes.row}>
                  <Typography className={classes.title} style={{ marginRight: '85px' }}>
                    Nome:
                  </Typography>
                  <Typography className={classes.content}>
                    {profileOwner.name}
                  </Typography>
                </div>
                <div className={classes.row}>
                  <Typography className={classes.title} style={{ marginRight: '74px' }}>
                    Cidade:
                  </Typography>
                  <Typography className={classes.content}>
                    {profileOwner.city}
                  </Typography>
                </div>
                <div className={classes.row}>
                  <Typography className={classes.title} style={{ marginRight: '50px' }}>
                    Nickname:
                  </Typography>
                  <Typography className={classes.content}>
                    {profileOwner.user_name}
                  </Typography>
                </div>
                <div className={classes.row}>
                  <Typography className={classes.title} style={{ marginRight: '90px' }}>
                    Email:
                  </Typography>
                  <Typography className={classes.content}>
                    {profileOwner.email}
                  </Typography>
                </div>
              </>
              : 
              <div>
                <div>
                  <p onClick={() => setEstante(false)} style={{cursor: 'pointer'}}>Voltar</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <p style={{fontFamily: 'cursive'}}>FILMES ASSISTIDOS 🍿</p>
                </div>
                <div className={classes.board}>
                    {renderWatchedMovies()}
                </div>
              </div>
            :
            <Skeleton height={400} />
          }

        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10%',
    paddingBottom: '10%',
    backgroundColor: 'gray',
    height: '100vh',
    alignItems: 'center'
  },
  root: {
    minWidth: 500,
    maxWidth: 600,
    backgroundColor: '#363636',
    color: 'white',
    borderRadius: '25px'
  },
  avatar: {
    borderRadius: '50%',
    width: '30%',
    height: '30%',
    margin: '25px 25px 25px 25px',
    alignSelf: 'center'
  },
  userName: {
    alignSelf: 'center',
    fontSize: 'xx-large',
  },
  row: {
    display: 'flex',
    paddingTop: '20px'
  },
  title: {
    fontSize: '20px',
    color: 'darkgrey',
    marginLeft: '10%',
  },
  content: {
    fontSize: 'x-large'
  },
  estanteButton: {
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    fontWeight: 500,
    '&:hover': {
      color: "black",
      backgroundColor: 'grey'
    },
  },
  board:{
    display: 'grid',
    alignItems: 'center',
    gridAutoFlow: 'row',
    gridAutoRows: '35%', // play with this to change height of the children, 50% will fill half
    gridTemplateColumns: '1fr 1fr', // do not set template columns and rows
    gridTemplateRows: 'unset',
    overflow: 'scroll'
  },
}));

export default Profile;

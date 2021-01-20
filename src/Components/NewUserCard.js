import React from 'react'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {formatarIdade, formatarAltDaImagem} from './Utils/User';

import userAvatar from '../assets/user_profile.png'

const NewUserCard = (props) => {

  const classes = useStyles();

  return (
        <Card className={classes.root}>
          <CardActionArea>
            <div className={classes.avatarPosition}>
                <CardMedia
                    component="img"
                    alt={formatarAltDaImagem(props.name)}
                    height="150"
                    image={userAvatar}
                    title="Avatar do usuário"
                    classes = {{
                        root: classes.avatar
                    }}
                />
            </div>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.name}>
                  {props.name}
              </Typography>
              <Typography className={classes.description}>
                  {formatarIdade(props.age)}
              </Typography>
              <Typography className={classes.description}>
                  {props.address}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        width: '20%',
        margin: '10px 10px 10px 10px',
        borderRadius: '20px',
        backgroundColor: '#1e1b49'
    },
    cardActions: {
        justifyContent: 'center'
    },
    cardContent: {
        backgroundColor: '#3d3c5e',
        margin: '0 10px 10px 10px',
        borderRadius: '20px'
    },
    name: {
        color: 'white',
        fontSize: '20px',
        marginBottom: '10px'
    },
    description: {
        color: 'white',
        fontSize: '15px'
    },
    avatar: {
        borderRadius: '50%',
        width: '50%',
        height: '50%',
        margin: '25px 25px 25px 25px'
    },
    avatarPosition: {
        display: 'flex',
        justifyContent: 'center'
    },
    homeImage: {
      width: '100%',
      height: '250px'
    },
    homeImageText: {
      position: "absolute",
      top: "270px",
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
    newUsers: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    background: {
      background: 'linear-gradient(black 10%, grey)',
      width: '110%',
      alignSelf: 'center'
    },
    footer: {
      backgroundColor: '#8e8e8e',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    footerText: {
      fontSize: 'x-large',
      position: 'absolute'
    }
}));

export default NewUserCard;

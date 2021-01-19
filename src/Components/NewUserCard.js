import React from 'react'
import { makeStyles } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import userAvatar from '../assets/user_profile.png'

const NewUserCard = (props) => {

  const classes = useStyles();

  return (
        <Card className={classes.root}>
          <CardActionArea>
            <div className={classes.avatarPosition}>
                <CardMedia
                    component="img"
                    alt="Avatar do usuário"
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
                  {props.age + ' anos'}
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
        margin: '50px',
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
    }
}));

export default NewUserCard;

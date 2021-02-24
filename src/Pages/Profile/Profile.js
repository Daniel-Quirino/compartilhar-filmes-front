import React, { useEffect, useState } from 'react'
import { makeStyles, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';

import userAvatar from '../../assets/user_profile.png'
import { getUserById } from '../../service/users/index'

function Profile(props){

  const classes = useStyles();
  const [loggedUser, setLoggedUser] = useState(props.loggedUser)
  const [profileOwner, setProfileOwner] = useState(null)

  const getProfileOwner = async () => {
    try{
      const res = await getUserById(props.loggedUser._id);
      setProfileOwner(res.data.user);
    } catch(error){
      console.log("Error")
    }
  }
  
  useEffect(() => {
    async function fetch(){
      await getProfileOwner();
    }
    fetch();
  }, [])

  useEffect(() => {
    setLoggedUser(props.loggedUser);
  }, [props.loggedUser])


  return (
    <div className={classes.container}>
        <Card className={classes.root}>
          <CardContent style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              {profileOwner ?
                <>
                  <CardMedia
                    component="img"
                    height="150"
                    image={userAvatar}
                    title="Avatar do usuário"
                    classes = {{
                        root: classes.avatar
                    }}
                  />
                  <Typography className={classes.userName}>
                    {profileOwner.name}
                  </Typography>
                </>
                :
                <Skeleton height={400}/>
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
      color: 'white'
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
    }
}));

export default Profile;

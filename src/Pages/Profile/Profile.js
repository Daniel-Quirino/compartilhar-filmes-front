import React, { useEffect } from 'react'
import { makeStyles, Card } from '@material-ui/core';

function Profile(){

  const classes = useStyles();

  useEffect(() => {

  }, [])
  return (
    <div className={classes.root}>
        <Card/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
          },
      },
}));

export default Profile;

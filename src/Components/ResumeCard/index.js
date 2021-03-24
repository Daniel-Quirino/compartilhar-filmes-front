import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
});

export default function SimpleCard(props) {
  const classes = useStyles();

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
      </CardContent>
    </Card>
  );
}
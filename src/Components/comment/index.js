import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';

import { Divider, Avatar, Grid, Paper, Button } from "@material-ui/core";

import {updateMovieComment} from '../../service/movies'


const imgLink = 'https://www.w3schools.com/howto/img_avatar.png'

export default function Comments(props) {
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState('');

  async function fetchData() {
    setComments([...comments, newComment]);

    try {
        const response = await updateMovieComment(props.movieId, newComment);
        setComments(response.comments)
    } catch (e) {
    }
  };

  const onChangeInput = (e) => {
    setNewComment(e.target.value);
  }

  return (
    <div style={{ padding: "20px 80px", width: '100%' }}>
      <h1>Comentários</h1>
      <div>
        <TextField style={{  color: 'black' }}
            id="outlined-multiline-static"
            label="Faça um comnetário"
            multiline
            onChange={onChangeInput}
            fullWidth
            variant="outlined"
            width={500}
          />
        </div>
      <Button style={{ marginTop: '10px', marginBottom: '20px' }} variant="contained" color="secondary" onClick={fetchData}>
        Comentar
      </Button>
      <Paper style={{ padding: "20px" , backgroundColor: '#DCDCDC'}}>
        {comments && comments.length ? comments.map((comment, index) => {
          return (
            
            <>
                    <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}></h4>
            <p style={{ textAlign: "left" }}>
            {comment}.{" "}
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "10px 0" }} />
            </>
          )
        })
      : <h3> Nâo existem comentários ainda</h3>}

      </Paper>

    </div>
  );
}




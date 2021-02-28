import React from "react";

import { Divider, Avatar, Grid, Paper, Button } from "@material-ui/core";

const imgLink = 'https://www.w3schools.com/howto/img_avatar.png'

export default function Comments(props) {
  return (
    <div style={{ padding: "20px 80px", width: '100%' }}>
      <h1>Comentários</h1>
      <Paper style={{ padding: "20px" , backgroundColor: '#DCDCDC'}}>
        {props.comments ? Object.keys(props.comments).map((id, index) => {
          return (
            
            <>
                    <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{props.comments[id].name}</h4>
            <p style={{ textAlign: "left" }}>
            {props.comments[id].comment}.{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
            {props.comments[id].date}
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "10px 0" }} />
            </>
          )
        })
      : <h3> Nâo existem comentários ainda</h3>}

      </Paper>
      <Button style={{ marginTop: '10px' }} variant="contained" color="secondary">
        Comentar
      </Button>
    </div>
  );
}




import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useHistory } from "react-router-dom";

import movie from '../../assets/movie.png';
import createUser from '../../service/users/index';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SignUp = (props) => {
  
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const Copyright = () => {
      return (
          <Typography variant="body2" color="textSecondary" align="center"  style={{paddingTop: '50px'}}>
            {'Copyright © '}
            <Link color="inherit" href="/">
              Filmateca
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
      );
  }

  const CadastrarUsuario = async () => {

    if(name === '' || email === '' || username === '' || city === '' || password === '' || confirmPassword === ''){
        setSeverity("warning");
        setNotificationMessage("Preencher todos os campos!");
        handleClick();
        return null;
    }

    if(password !== confirmPassword){
        setSeverity("error");
        setNotificationMessage("Senhas não conferem!");
        handleClick();
        return null
    }

    const newUser = {
        name: name,
        user_name: username,
        email: email,
        city: city,
        password: password
    }
    
    const response = await createUser(newUser);
    console.log(response.data)
    if(response.status === 201){
        setSeverity("success");
        setNotificationMessage("Usuário criado com sucesso!");
        handleClick();
        setName('');
        setUsername('');
        setEmail('');
        setCity('');
        setPassword('');
        setConfirmPassword('');
        setTimeout(function(){ history.push("/entrar"); }, 3000);
    }else{
        setSeverity("error");
        setNotificationMessage("Erro interno");
        handleClick();
    }
  }

  return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
              <img src={movie} alt='logo' className={classes.logo} />
              <Typography component="h1" variant="h5">
                Seja bem-vindo!
              </Typography>
              <form className={classes.form} noValidate>
                  <Grid container spacing={3}>
                      <Grid item xs>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="name"
                              label="Nome"
                              name="name"
                              autoComplete="name"
                              autoFocus
                              value={name}
                              onChange={e => {setName(e.target.value)}}
                          />
                      </ Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="Email"
                              name="email"
                              autoComplete="email"
                              value={email}
                              onChange={e => {setEmail(e.target.value)}}
                          />
                      </ Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="username"
                              label="Usuário"
                              name="username"
                              autoComplete="username"
                              value={username}
                              onChange={e => {setUsername(e.target.value)}}
                          />
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="city"
                              label="Cidade"
                              name="city"
                              autoComplete="city"
                              value={city}
                              onChange={e => {setCity(e.target.value)}}
                          />
                      </ Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              name="password"
                              label="Senha"
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              value={password}
                              onChange={e => {setPassword(e.target.value)}}
                          />
                      </ Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              name="confirmPassword"
                              label="Confirmar senha"
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              value={confirmPassword}
                              onChange={e => {setConfirmPassword(e.target.value)}}
                          />
                      </Grid>
                  </Grid>
                  <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={() => CadastrarUsuario()}
                  >
                      Cadastrar
                  </Button>
                  <Grid container>
                      <Grid item xs />
                      <Grid item>
                        <Link href="/entrar" variant="body2">
                            {"Já possui uma conta? Entre aqui"}
                        </Link>
                      </Grid>
                </Grid>
            </form>
          </div>
          <Box>
              {Copyright}
          </Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {notificationMessage}
                </Alert>
          </Snackbar>
      </Container>
  );
}


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '150%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        width: '25%',
        paddingTop: '25%',
        paddingBottom: '10%'
    }
}));

export default SignUp;

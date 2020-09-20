import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';
import localStorage from 'local-storage';
import AuthRoute from './util/AuthRoute';
//Navbar
import Navbar from './components/Navbar';

//pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
palette:{
  primary: {
  light:'#33c9c',
  main:'#00bcd4',
  dark:'#008394',
  contrastText: '#fff'
  },
  secondary: {
  light:'#33c9c',
  main:'#00bcd4',
  dark:'#008394',
  contrastText: '#fff'
   }
  },
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: 'center'
 },
 image: {
     margin: '20px auto 20px auto'
 },
 pageTitle: {
     margin: '10px auto 20px auto'
 },
 textField: {
     margin: '10px auto 20px auto'
 },
 customError:{
     color: 'red',
     fontSize:'0.8rem',
     marginTop: 10
 },
 button: {
     marginTop: 20,
     position: 'relative'
 },
 progress: {
     position: 'absolute'
 }

});
let authenticated;
const token = localStorage.get('FBIdtoken');
if(token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if(decodedToken.exp * 1000 > Date.now()){
    window.location.href = '/login'
    authenticated = false;
  } else {
    authenticated = true;
  }
}
class App extends Component {
  render (){
    return (
   
      <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router> 
        <Navbar/> 
          <div className="container">
            <Switch>
              <AuthRoute exact path="/" component={home}/>
              <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
              <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
            </Switch> 
        </div>
      
      </Router>
    </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

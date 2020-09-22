import {SET_USER, SET_ERRORS, SET_UNAUTHENTICATED, CLEAR_ERRORS, LOADING_UI } from '../types';
import axios from 'axios';


export const loginUser =(userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI});
    axios.post('http://localhost:5000/voiceout-dc233/us-central1/api/login', userData)
    .then(res => { 
        setAuthorizationHeader(res.data.token);
    //   const FBIdtoken = `Bearer ${res.data.token}`;
    //   localStorage.setItem('FBIdtoken', `Bearer ${res.data.token}`);
    //   axios.defaults.headers.common['Authorization'] = FBIdtoken;
      dispatch(getUserdata());
      dispatch({type: CLEAR_ERRORS});
      history.push(`/`);
  })
  .catch((err) => {
      dispatch({
          type: SET_ERRORS,
          payload: err.response.data
      });
  });
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({type: SET_UNAUTHENTICATED });
}
export const getUserdata = () => (dispatch) => {
    axios.get('http://localhost:5000/voiceout-dc233/us-central1/api/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const signupUser =(newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI});
    axios.post('http://localhost:5000/voiceout-dc233/us-central1/api/signup', newUserData)
    .then(res => { 
        setAuthorizationHeader(res.data.token);
    //   const FBIdtoken = `Bearer ${res.data.token}`;
    //   localStorage.setItem('FBIdtoken', `Bearer ${res.data.token}`);
    //   axios.defaults.headers.common['Authorization'] = FBIdtoken;
      dispatch(getUserdata());
      dispatch({type: CLEAR_ERRORS});
      history.push(`/`);
  })
  .catch((err) => {
      dispatch({
          type: SET_ERRORS,
          payload: err.response.data
      });
  });
};

const setAuthorizationHeader = (token) => {
    const FBIdtoken = `Bearer ${token}`;
      localStorage.setItem('FBIdtoken', `Bearer ${token}`);
      axios.defaults.headers.common['Authorization'] = FBIdtoken;
}

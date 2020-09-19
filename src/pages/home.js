import { Grid } from '@material-ui/core';
import React, { Component } from 'react'; 
import axios from 'axios';
import Scream from '../components/Scream';

class home extends Component {
    state = {
        screams: null
    }
    componentDidMount(){
    axios.get('http://localhost:5000/voiceout-dc233/us-central1/api/screams')
        .then(res => {
            // console.log(res.data)
            this.setState({
              screams: res.data
            })
        })
        .catch((err) => console.error(err));
    }
    render() {
        let recentScreamsMarkUp = this.state.screams? (
        this.state.screams.map((scream) => <Scream key={scream.screamId} scream={scream}/>)
        ): <p>Loading..</p>
        return (
             <Grid container spacing={10}>
                 <Grid item sm={8} xs={12}>
                     {recentScreamsMarkUp}
                 </Grid>
                 <Grid item sm={4} xs={12}>
                     <p> Profile ..</p>
                 </Grid>
             </Grid>
        )
    }
}

export default home;
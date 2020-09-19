import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

//Material UI 
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import { Button } from '@material-ui/core';

class Navbar extends Component {
    render() {
        return (
            <AppBar position="fixed">
                <ToolBar className="nav-container">
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/signup">Signup</Button>
                </ToolBar>
            </AppBar>
        )
    }
}

export default Navbar;

import React, { Component } from 'react';
import Navbar from '../components/Layout/navbar';

class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Navbar/>
                <h1> Home </h1>
            </div>
        );
    }
}

export default Home;
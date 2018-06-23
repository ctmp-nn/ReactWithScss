import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() {
        const path = window.location.pathname;
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class={path === '/' ? 'nav-item active' : 'nav-item'}>
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class={path === '/contact' ? 'nav-item active' : 'nav-item'}>
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
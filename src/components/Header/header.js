import React, { Component } from 'react';
import './header.css'
class Header extends Component {
    render() {
        return (
            <header className='colored-header'>
                <h1>React to Famous People</h1>
            </header>
        );
    }
}

// hmmm... a head seems pretty important... you might want it by default
export default Header;
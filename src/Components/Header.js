import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar >
                <Navbar  className='Brand'>
                    BookFinder
                </Navbar>
            </Navbar>
        );
    }
}

export default Header;

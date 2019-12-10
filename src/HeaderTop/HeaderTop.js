import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderTop.css';

class HeaderTop extends React.Component {
    render() {
        return (
            <header>
                <Link to='/'><h1>Noteful</h1></Link>
            </header>
        )
    }
}

export default HeaderTop;
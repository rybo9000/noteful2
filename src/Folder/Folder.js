import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component {
    
    
    
    render() {

        const linkPath = `folder/${this.props.id}`;

        return (
        <li><Link to={linkPath}>{this.props.name}</Link></li>
        )
    }
}

export default Folder;
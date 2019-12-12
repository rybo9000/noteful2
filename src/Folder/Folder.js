import React from 'react';
import './Folder.css';

class Folder extends React.Component {
    render() {
        return (
        <li key={this.props.key} className={this.props.folderClass}>{this.props.name}</li>
        )
    }
}

export default Folder;
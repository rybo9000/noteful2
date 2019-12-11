import React from 'react';
import './Folder.css';

class Folder extends React.Component {
    render() {
        return (
        <div key={this.props.key} className="folderDiv">{this.props.name}</div>
        )
    }
}

export default Folder;
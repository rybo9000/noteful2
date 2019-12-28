import React from 'react';
import './Folder.css';
import PropTypes from 'prop-types';

class Folder extends React.Component {
    render() {
        return (
        <li key={this.props.key} className={this.props.folderClass}>{this.props.name}</li>
        )
    }
}

Folder.propTypes = {
    key: PropTypes.number,
    className: PropTypes.string,
    name: PropTypes.string
}

export default Folder;
import React from 'react';
import './Note.css';

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <h3>{this.props.name}</h3>
                <p>Date modified on {this.props.modified}</p>
            </div>
        )
    }
}

export default Note;
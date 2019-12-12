import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

class Note extends React.Component {
    render() {
        return (
            <div className="noteSummary">
                <div className="noteLeft">
                    <Link to={`/note/${this.props.id}`}><h2 key={this.props.id}>{this.props.name}</h2></Link>
                    <p>Date modified on {this.props.modified} </p>
                </div>
                <div className="noteRight">
                    <button>Delete Note</button>
                </div>
                
            </div>
        )
    }
}

export default Note;
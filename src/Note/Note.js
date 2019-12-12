import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

class Note extends React.Component {
    render() {
        return (
            <div className="noteSummary">
                <div>
                    <Link to={`/note/${this.props.id}`}><h3 key={this.props.id}>{this.props.name}</h3></Link>
                </div>
                <div>
                    Date modified on {this.props.modified} <button>Delete Note</button>
                </div>
                
            </div>
        )
    }
}

export default Note;
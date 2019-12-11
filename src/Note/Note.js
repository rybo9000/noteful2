import React from 'react';
import './Note.css';

class Note extends React.Component {
    render() {
        return (
            <div className="noteSummary">
                <div>
                    <h3 key={this.props.id}>{this.props.name}</h3>
                </div>
                <div>
                    Date modified on {this.props.modified} <button>Delete Note</button>
                </div>
                
            </div>
        )
    }
}

export default Note;
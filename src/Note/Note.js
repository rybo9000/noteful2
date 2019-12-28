import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Note.css';
import NoteContext from '../NoteContext'
import PropTypes from 'prop-types';

class Note extends React.Component {
    render() {
        return (

            <NoteContext.Consumer>
                {(value) => {
                
                    return (
                        <div className="noteSummary">
                            <div className="noteLeft">
                                <Link to={`/note/${this.props.id}` }><h2 key={this.props.id}>{this.props.name}</h2></Link>
                                <p>Date modified on {this.props.modified} </p>
                            </div>
                            <div className="noteRight">
                                <button onClick={() => value.submitDelete(this.props.id, this.props.match.path)}>Delete Note</button>
                            </div>
                        
                        </div>
                    )
                }}
            </NoteContext.Consumer>

        )
    }
}

Note.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
}

export default withRouter(Note);
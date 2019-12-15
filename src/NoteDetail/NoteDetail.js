import React from 'react';
import NoteContext from '../NoteContext';

class NoteDetail extends React.Component {
    render() {
        

        
        return (
            <NoteContext.Consumer>
                {(value) => {
                    
                    const noteObject = (value.state.state.notes.filter(note => note.id === this.props.match.params.noteId))
                    console.log(noteObject);
                    
                    return (
                        <div>
                            <h1>{noteObject[0].name}</h1>
                            <p>{noteObject[0].content}</p>
                        </div>
                    )
                }}
            </NoteContext.Consumer>

        )
    }
}

export default NoteDetail;
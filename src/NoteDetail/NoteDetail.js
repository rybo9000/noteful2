import React from 'react';
import NoteContext from '../NoteContext';
import Note from '../Note/Note';

class NoteDetail extends React.Component {
    render() {
        

        
        return (
            <NoteContext.Consumer>
                {(value) => {
                    
                    const noteObject = (value.notes.filter(note => note.id === this.props.match.params.noteId))
                    
                    return (
                        <div>
                            <Note id={noteObject[0].id} name={noteObject[0].name} modified={noteObject[0].modified} key={noteObject.id} {...this.props}/>
                            <p>{noteObject[0].content}</p>
                        </div>
                    )
                }}
            </NoteContext.Consumer>

        )
    }
}

export default NoteDetail;
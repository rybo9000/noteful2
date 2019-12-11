import React from 'react';

class NoteDetail extends React.Component {
    render() {
        
        const noteObject = (this.props.notes.filter(note => note.id === this.props.match.params.noteId))
        console.log(noteObject);
        
        return (
            <div>
                <h1>{noteObject[0].name}</h1>
                <p>{noteObject[0].content}</p>
            </div>
        )
    }
}

export default NoteDetail;
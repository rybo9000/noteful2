import React from 'react';
import Note from '../Note/Note';

class NoteList extends React.Component {
    render() {
        
        const allNotes = this.props.notes.map((note) => {
            return <Note id={note.id} name={note.name} modified={note.modified} folderId={note.folderId}/>
        });
        
        return (
            <div>
                {allNotes}
            </div>
        )
    }
}

export default NoteList;
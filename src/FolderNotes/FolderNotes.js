import React from 'react';
import Note from '../Note/Note';

class FolderNotes extends React.Component {
    render() {
        
        console.log("props = " + this.props.notes);
        
        const notesArray = (this.props.notes.filter(note => note.folderId === this.props.match.params.folderId)).map((note) => {
            return <Note id={note.id} name={note.name} modified={note.modified}/>
        });

        
        
        return (
            <div>
                {notesArray}
            </div>
        )
    }
}

export default FolderNotes;
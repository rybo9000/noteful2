import React from 'react';
import Note from '../Note/Note';
import NoteContext from '../NoteContext';

class FolderNotes extends React.Component {
    render() {
    
        


        
        
        return (
            
            <NoteContext.Consumer>
                {(value) => {
                            
                    const notesArray = (value.notes.filter(note => note.folderId === this.props.match.params.folderId)).map((note) => {
                        return <Note id={note.id} name={note.name} modified={note.modified} key={note.id} submitDelete={value.submitDelete}/>
                    });
                    
                    return (
                        <div>
                            {notesArray}
                        </div>
                    )
                }}
            </NoteContext.Consumer>

        )
    }
}

export default FolderNotes;
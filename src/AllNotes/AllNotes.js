import React from 'react';
import Note from '../Note/Note';
import NoteContext from '../NoteContext';

class NoteList extends React.Component {
    render() {
        
        const allNotes = this.props.notes.map((note) => {
            return <Note id={note.id} name={note.name} modified={note.modified} folderId={note.folderId}/>
        });
        
        return (
            <NoteContext.Consumer>
                {function renderPropr() {
                
            return (
            <div>
                {allNotes}
            </div>
            )
            }}
            </NoteContext.Consumer>
        )
    }}

export default NoteList;
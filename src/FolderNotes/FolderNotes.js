import React from 'react';

class FolderNotes extends React.Component {
    render() {
        
        console.log(this.props.match.params.folderId);
        
        //const notesArray = this.props.notes.filter(note => note.id === this.props.match.params.folderId);
        
        return (
            <div>
                
            </div>
        )
    }
}

export default FolderNotes;
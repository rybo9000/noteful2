import React from 'react';
import Note from '../Note/Note';

class MainContent extends React.Component {
    render() {
        
        const notes = this.props.notes.map((note) => {
            return <Note content={note.content} name={note.name} modified={note.modified} />
        })

        return (
            <div className="right">
                {notes}
            </div>
        )
    }
}

export default MainContent;
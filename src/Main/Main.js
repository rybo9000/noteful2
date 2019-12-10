import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import NoteList from '../NoteList/NoteList';
import FolderNotes from '../FolderNotes/FolderNotes';
import Note from '../Note/Note';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Route exact path='/' component={NoteList} />
                <Route path='/folder/:folderId' component={FolderNotes} />
                <Route path='/note/:noteId' component={Note} />
            </main>
        )
    }
}

export default Main;
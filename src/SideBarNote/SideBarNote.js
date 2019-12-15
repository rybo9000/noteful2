import React from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';
import './SideBarNote.css';
import NoteContext from '../NoteContext';

class SideBarNote extends React.Component {
    render() {
        

    
        
        return (
            
            <NoteContext.Consumer>
                {(value) => {
                    
                    const folderId = (value.state.state.notes.filter(note => note.id === this.props.match.params.noteId))[0].folderId;

                    const folderObject = value.state.state.folders.filter(folder => folderId === folder.id);
                    
                    return (
                        <div class="sideBar">
                            <li>
                                <Link to={`/folder/${folderObject[0].id}`}><Folder name={folderObject[0].name} key={folderObject[0].id} folderClass="folderDiv"/></Link>
                                <button onClick={() => this.props.history.goBack()} className="backButton">Back</button>
                            </li>
                        </div>
                    )
                }}
            </NoteContext.Consumer>
            

        )
    }
}

export default SideBarNote;
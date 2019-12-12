import React from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';

class SideBarNote extends React.Component {
    render() {
        
        const folderId = (this.props.notes.filter(note => note.id === this.props.match.params.noteId))[0].folderId;

        const folderObject = this.props.folders.filter(folder => folderId === folder.id);
    
        
        return (
            <div class="sideBar">
                <li>
                    <Link to={`/folder/${folderObject[0].id}`}><Folder name={folderObject[0].name} key={folderObject[0].id} folderClass="folderDiv"/></Link>
                    <button onClick={() => this.props.history.goBack()}>Back</button>
                </li>
            </div>
        )
    }
}

export default SideBarNote;
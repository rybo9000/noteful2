import React from 'react';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';

class Sidebar extends React.Component {
    render() {
        
        return (
            <NoteContext.Consumer>
                {(value) => {
                    
                    const folderArray = value.state.state.folders.map((folder) => {
                        return <Link to={`/folder/${folder.id}`}><Folder name={folder.name} key={folder.id} folderClass="folderDiv" /></Link>
                    })
                    
                    return (
                        <div class="sideBar">
                        <li>
                        {folderArray}
                        </li>
                        </div>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

export default Sidebar;
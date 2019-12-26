import React from 'react';
import Folder from '../Folder/Folder';
import { Link, withRouter } from 'react-router-dom';
import NoteContext from '../NoteContext';

class Sidebar extends React.Component {
    render() {
        
        return (
            <NoteContext.Consumer>
                {(value) => {
                    
                    const folderArray = value.folders.map((folder) => {
                        return <Link to={`/folder/${folder.id}`}><Folder name={folder.name} key={folder.id} folderClass="folderDiv" /></Link>
                    })
                    
                    return (
                        <div className="sideBar">
                            <ul>
                                {folderArray}
                                <li><button onClick={() => this.props.history.push('/addFolder/')} className="addFolderButton">Add Folder</button></li>
                                <li><button onClick={() => this.props.history.push('/addNote/')} className="addFolderButton">Add Note</button></li>

                                
                            </ul>
                        </div>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

export default withRouter(Sidebar);
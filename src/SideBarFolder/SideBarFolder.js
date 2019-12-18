import React from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';
import NoteContext from '../NoteContext';

class SideBarFolder extends React.Component {
    render() {
        

        
        return (
            <NoteContext.Consumer>
                {(value) => {
                            
                    const folderArray = value.folders.map((folder) => {
    
                        const folderClass = folder.id === this.props.match.params.folderId ? "folderSelected" : "folderDiv";
                        
                        return <Link to={`/folder/${folder.id}`}><Folder name={folder.name} key={folder.id} folderClass={folderClass}/></Link>
                    })
                    
                    return (
                        <div className="sideBar">
                            <ul>
                                {folderArray}
                            </ul>
                        </div>
                    )
                }}
            </NoteContext.Consumer>

        )
    }
}

export default SideBarFolder;
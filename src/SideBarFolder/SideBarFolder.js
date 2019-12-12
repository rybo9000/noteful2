import React from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';

class SideBarFolder extends React.Component {
    render() {
        
        const folderArray = this.props.folders.map((folder) => {
            
            const folderClass = folder.id === this.props.match.params.folderId ? "folderSelected" : "folderDiv";
            
            return <Link to={`/folder/${folder.id}`}><Folder name={folder.name} key={folder.id} folderClass={folderClass}/></Link>
        })
        
        return (
            <div className="sideBar">
                <li>
                {folderArray}
                </li>
            </div>
        )
    }
}

export default SideBarFolder;
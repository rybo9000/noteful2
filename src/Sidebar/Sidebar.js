import React from 'react';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        
        const folderArray = this.props.folders.map((folder) => {
            return <Link to={`/folder/${folder.id}`}><Folder name={folder.name} key={folder.id} folderClass="folderDiv" /></Link>
        })
        
        return (
            <div class="sideBar">
                <li>
                    {folderArray}
                </li>
            </div>
        )
    }
}

export default Sidebar;
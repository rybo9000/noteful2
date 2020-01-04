import React from 'react';
import Folder from '../Folder/Folder';
import './MainSide.css';

class MainSide extends React.Component {
    render() {
        
        const folderList = this.props.folders.map((folder) => {
            return <Folder key={folder.id} name={folder.name} id={folder.id}/>
        })
        
        return (
            <div className="left">
                <ul>
                    {folderList}
                </ul>
            </div>
        )
    }
}

export default MainSide;
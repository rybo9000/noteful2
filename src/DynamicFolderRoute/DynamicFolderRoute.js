import React from 'react';
import SidebarFolder from '../SideBarFolder/SideBarFolder';
import FolderNotes from '../FolderNotes/FolderNotes';

class DynamicFolderRoute extends React.Component {
    render() {

        
        return (
            
            <>
                <div className="left">
                <SidebarFolder {...this.props}/>
                </div>
                <div className="right">
                <FolderNotes {...this.props}/>
                </div>
            </>
        )
    }
}

export default DynamicFolderRoute;
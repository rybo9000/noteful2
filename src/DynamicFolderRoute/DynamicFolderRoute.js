import React from 'react';
import SidebarFolder from '../SideBarFolder/SideBarFolder';
import FolderNotes from '../FolderNotes/FolderNotes';

class DynamicFolderRoute extends React.Component {
    render() {

        
        return (
            
            <>
                <div className="left">
                <SidebarFolder folders={this.props.folders}   {...this.props}/>
                </div>
                <div className="right">
                <FolderNotes notes={this.props.notes}  {...this.props}/>
                </div>
            </>
        )
    }
}

export default DynamicFolderRoute;
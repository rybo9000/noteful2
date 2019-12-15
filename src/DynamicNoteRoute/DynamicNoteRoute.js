import React from 'react';
import SidebarNote from '../SideBarNote/SideBarNote';
import NoteDetail from '../NoteDetail/NoteDetail';

class DynamicFolderRoute extends React.Component {
    render() {
        
        console.log(this.props);
        
        return (
            
            <>
                <div className="left">
                <SidebarNote {...this.props}/>
                </div>
                <div className="right">
                <NoteDetail {...this.props}/>
                </div>
            </>
        )
    }
}

export default DynamicFolderRoute;
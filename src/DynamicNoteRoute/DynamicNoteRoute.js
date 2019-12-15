import React from 'react';
import SidebarNote from '../SideBarNote/SideBarNote';
import NoteDetail from '../NoteDetail/NoteDetail';

class DynamicFolderRoute extends React.Component {
    render() {
        
        console.log(this.props);
        
        return (
            
            <>
                <div className="left">
                <SidebarNote folders={this.props.folders}   {...this.props}/>
                </div>
                <div className="right">
                <NoteDetail notes={this.props.notes}  {...this.props}/>
                </div>
            </>
        )
    }
}

export default DynamicFolderRoute;
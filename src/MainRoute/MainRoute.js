import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AllNotes from '../AllNotes/AllNotes';

class MainRoute extends React.Component {
    render() {

        return (
            <>
                <div className="left">
                    <Sidebar folders={this.props.folders} />
                </div>
                <div className="right">
                    <AllNotes notes={this.props.notes} /> 
                </div>
            </>
        )
    }
}

export default MainRoute;
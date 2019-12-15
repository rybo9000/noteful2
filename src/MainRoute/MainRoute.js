import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AllNotes from '../AllNotes/AllNotes';

class MainRoute extends React.Component {
    render() {

        return (
            <>
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    <AllNotes /> 
                </div>
            </>
        )
    }
}

export default MainRoute;
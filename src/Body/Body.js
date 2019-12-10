import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import './Body.css';

class Body extends React.Component {
    render() {
        
        return (
            
            <div class="body">
                <Sidebar folders={this.props.state.state.folders}/>
                <Main notes={this.props.state.state.notes}/>
            </div>

        )
    }
}

export default Body;


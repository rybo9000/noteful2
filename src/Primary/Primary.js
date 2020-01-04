import React from 'react';
import './Primary.css';

class Primary extends React.Component {
    render() {
        return (
            <div className="primary">
                {this.props.children}
            </div>
        )
    }
}

export default Primary;
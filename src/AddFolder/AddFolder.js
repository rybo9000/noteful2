import React from 'react';
import './AddFolder.css';

class AddFolder extends React.Component {
    render() {
        return (
            <div className="addFolderDiv">
                <form id="addFolder">
                   <p><label for="folderName">Folder Name</label></p>
                   <p><input type="text" id="folderName" /></p>
                   <p><button type="submit" id="addFoldersubmit">Add Folder</button><button type="submit" id="addFolderGoBack" onClick={() => this.props.history.push('/')}>Go Back</button></p>
                </form>
            </div>
        )
    }
}

export default AddFolder;
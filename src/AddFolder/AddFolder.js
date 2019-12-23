import React from 'react';
import './AddFolder.css';
import '../NoteContext';
import NoteContext from '../NoteContext';

class AddFolder extends React.Component {
    render() {
        return (
            
            <NoteContext.Consumer>
                {(value) => {
                    return (
                        <div className="addFolderDiv">
                            <form id="addFolder" onSubmit={(e) => value.submitAddFolder(e)}>
                                <p><label htmlFor="folderName">Type The Folder Name Below</label></p>
                                <p><input type="text" id="folderName"  className="addFolderFormItem" value={value.addFolderInput} onInput={(e) => value.addFolderOnInput(e)}/></p>
                                <p><button type="submit" id="addFoldersubmit" className="addFolderFormItem">Add Folder</button><button type="submit" id="addFolderGoBack" onClick={() => this.props.history.push('/')} className="addFolderFormItem">Go Back</button></p>
                            </form>
                        </div>
                    )
                }
            }
       
            </NoteContext.Consumer>
             )
    }

}

export default AddFolder;
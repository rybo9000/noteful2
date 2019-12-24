import React from 'react';
import './AddNote.css';
import '../NoteContext';
import NoteContext from '../NoteContext';
import ValidationError from '../ValidationError/ValidationError';

class AddNote extends React.Component {
    

    
    render() {
        return (
            
            <NoteContext.Consumer>
                {(value) => {
                    
                    const folderArray = value.folders.map((folder) => {
                        return <option value={folder.id}>{folder.name}</option>
                    })
                    
                    return (
                        <div className="addNoteDiv">
                            <form id="addNote" onSubmit={(e) => value.submitAddNote(e)}>
                                <p><label htmlFor="noteName">Type The Note Name Below</label></p>
                                <p><input type="text" id="noteName"  className="addnoteFormItem" value={value.addNoteInput.fieldValue} onInput={(e) => value.addNoteOnInput(e)}/></p>
                                <p><ValidationError message={value.validateAddNote()}/></p>
                                <p><label htmlFor="folderId">Select The Folder Below</label></p>
                                <p>
                                    <select id="folderId"  className="addnoteFormItem" onChange={(e) => {value.addDropDown(e)}}>
                                    <option value={null}>Select A Folder</option>
                                    {folderArray}
                                    </select>
                                </p>
                                <p><ValidationError message={value.validateNoteDropDown()}/></p>
                                <p><button type="submit" id="addNoteSubmit" className="addNoteFormItem" disabled={value.validateAddNote() || value.validateNoteDropDown()}>Add Note</button><button type="submit" id="addNoteGoBack" onClick={() => this.props.history.push('/')} className="addNoteFormItem">Go Back</button></p>
                            </form>
                        </div>
                    )
                }
            }
       
            </NoteContext.Consumer>
             )
    }

}

export default AddNote;
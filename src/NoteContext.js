import React from 'react';

const NoteContext = React.createContext({
    state: {},
    submitDelete: () => {},
    submitDeleteDetail: () => {},
    submitAddFolder: () => {},
    submitAddNote: () => {},
    addFolderOnInput: () => {},
    validateAddFolder: () => {},
    validateAddNote: () => {},
    validateNoteDropDown: () => {},
    addNoteOnInput: () => {},
    addDropDown: () => {},
    addNoteTextOnInput: () => {}
})

export default NoteContext;
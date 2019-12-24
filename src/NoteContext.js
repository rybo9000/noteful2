import React from 'react';

const NoteContext = React.createContext({
    state: {},
    submitDelete: () => {},
    submitDeleteDetail: () => {},
    submitAddFolder: () => {},
    addFolderOnInput: () => {},
    validateAddFolder: () => {},
    validateAddNote: () => {},
    validateNoteDropDown: () => {},
    addNoteOnInput: () => {},
    addDropDown: () => {}
})

export default NoteContext;
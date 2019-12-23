import React from 'react';

const NoteContext = React.createContext({
    state: {},
    submitDelete: () => {},
    submitDeleteDetail: () => {},
    submitAddFolder: () => {},
    addFolderOnInput: () => {}
})

export default NoteContext;
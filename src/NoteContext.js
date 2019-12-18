import React from 'react';

const NoteContext = React.createContext({
    state: {},
    submitDelete: () => {},
    submitDeleteDetail: () => {}
})

export default NoteContext;
import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import MainRoute from './MainRoute/MainRoute';
import DynamicFolderRoute from './DynamicFolderRoute/DynamicFolderRoute';
import DynamicNoteRoute from './DynamicNoteRoute/DynamicNoteRoute';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import state from './State.js';
import NoteContext from './NoteContext';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends React.Component {
  
state = {
  notes: state.notes,
  folders: state.folders,
  addFolderInput: {
    fieldValue: "",
    touched: false
  },
  addNoteInput: {
    fieldValue: "",
    touched: false,
  },
  addDropDown: {
    noteValue: null,
    touched: false,
  },
  addNoteTextInput: {
    fieldValue: "",
    touched: false,
  },
  
}
  




componentDidMount() {
  Promise.all([
      fetch(`http://localhost:9090/notes`),
      fetch(`http://localhost:9090/folders`)
  ])
      .then(([notesRes, foldersRes]) => {
          if (!notesRes.ok)
              return notesRes.json().then(e => Promise.reject(e));
          if (!foldersRes.ok)
              return foldersRes.json().then(e => Promise.reject(e));

          return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
          this.setState({notes, folders});
      })
      .catch(error => {
          console.error({error});
      });
}
  

  


  
  submitDelete = (id, path) => {
    
    const updatedNotes = this.state.notes.filter(note => note.id !== id);

    this.setState({
      notes: updatedNotes
    })

    if (path === '/note/:noteId') {
      this.props.history.push('/');
    }
    
  }

  validateAddFolder = (fieldValue) => {
    const name = this.state.addFolderInput.fieldValue.trim();
    if (name.length === 0) {
      return 'Please enter a value'
    }
  }

  validateAddNote = (fieldValue) => {
    const name = this.state.addNoteInput.fieldValue.trim();
    if (name.length === 0) {
      return 'Please enter a value'
    }
  }

  validateAddNoteText = (fieldValue) => {
    const name = this.state.addNoteTextInput.fieldValue.trim();
    if (name.length === 0) {
      return 'Please enter a value'
    }
  }

  validateNoteDropDown = (noteValue) => {
    const theValue = this.state.addDropDown.noteValue;
    console.log(theValue);
    if (theValue === null) {
      return 'Please enter a value'
    }
    
  }

  addNoteOnInput = (e) => {
    this.setState({
      addNoteInput: {
        fieldValue: e.target.value
      }
    })
  }

  addNoteTextOnInput = (e) => {
    this.setState({
      addNoteTextInput: {
        fieldValue: e.target.value
      }
    })
  }

  addDropDown = (e) => {
    this.setState({
      addDropDown: {
        noteValue: e.target.value
      }
    })
  }

  addFolderOnInput = (e) => {
    this.setState({
      addFolderInput: {
        fieldValue: e.target.value
      }
    })
  }
  
  submitAddFolder = (e) => {
    e.preventDefault();
    const values = {id:"", name: this.state.addFolderInput.fieldValue};
    const options = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(`http://localhost:9090/folders`, options)
    .then (response => response.json())
    .then (response => {
      this.setState({
        folders: [...this.state.folders, response]
      })
    })

    
    this.props.history.push('/');
  }

  submitAddNote = (e) => {
    e.preventDefault();
    const now = new Date();
    const values = {id:"", name: this.state.addNoteInput.fieldValue, modified: now, folderId: this.state.addDropDown.noteValue, content: this.state.addNoteTextInput.fieldValue};
    const options = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(`http://localhost:9090/notes`, options)
    .then (response => response.json())
    .then (response => {
      this.setState({
        notes: [...this.state.notes, response]
      })
    })

    
    this.props.history.push('/');
  }
  
  render() {

    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      submitDelete: this.submitDelete,
      submitDeleteDetail: this.submitDeleteDetail,
      submitAddFolder: this.submitAddFolder,
      submitAddNote: this.submitAddNote,
      addFolderOnInput: this.addFolderOnInput,
      addFolderInput: this.state.addFolderInput,
      validateAddFolder: this.validateAddFolder,
      validateAddNote: this.validateAddNote,
      addNoteInput: this.state.addNoteInput,
      addNoteTextInput: this.state.addNoteTextInput,
      validateNoteDropDown: this.validateNoteDropDown,
      addDropDown: this.addDropDown,
      addNoteTextOnInput: this.addNoteTextOnInput,
      addNoteOnInput: this.addNoteOnInput,
      validateAddNoteText: this.validateAddNoteText,
    }
    
    return (
      <NoteContext.Provider value={contextValue}>
        <div className="wrapper">
            <header>
              <HeaderTop />
            </header>
            <main>
              <ErrorBoundary>
                <Switch>
                  <Route exact path='/' component={MainRoute}/>
                  <Route path='/folder/:folderId' component={DynamicFolderRoute} />
                  <Route path='/note/:noteId' component={DynamicNoteRoute} />
                  <Route path='/addFolder/' component={AddFolder} />
                  <Route path='/addNote/' component={AddNote} />
                </Switch>
              </ErrorBoundary>
            </main>
            <footer>
              Footer
            </footer>
        </div>
      </NoteContext.Provider>
    )
  }
}

export default withRouter(App);

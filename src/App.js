import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import MainRoute from './MainRoute/MainRoute';
import DynamicFolderRoute from './DynamicFolderRoute/DynamicFolderRoute';
import DynamicNoteRoute from './DynamicNoteRoute/DynamicNoteRoute';
import AddFolder from './AddFolder/AddFolder';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import state from './State.js';
import NoteContext from './NoteContext';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  
state = {
  notes: state.notes,
  folders: state.folders,
  addFolderInput: ""
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

  addFolderOnInput = (e) => {
    this.setState({
      addFolderInput: e.target.value
    })
  }
  
  submitAddFolder = (e) => {
    e.preventDefault();
    console.log("we did it reddit!");
  }
  
  render() {

    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      submitDelete: this.submitDelete,
      submitDeleteDetail: this.submitDeleteDetail,
      submitAddFolder: this.submitAddFolder,
      addFolderOnInput: this.addFolderOnInput,
      addFolderInput: this.state.addFolderInput
    }
    
    return (
      <NoteContext.Provider value={contextValue}>
        <div className="wrapper">
            <header>
              <HeaderTop />
            </header>
            <main>
              <Switch>
                <Route exact path='/' component={MainRoute}/>
                <Route path='/folder/:folderId' component={DynamicFolderRoute} />
                <Route path='/note/:noteId' component={DynamicNoteRoute} />
                <Route path='/addFolder/' component={AddFolder} />
              </Switch>
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

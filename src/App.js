import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import MainRoute from './MainRoute/MainRoute';
import DynamicFolderRoute from './DynamicFolderRoute/DynamicFolderRoute';
import DynamicNoteRoute from './DynamicNoteRoute/DynamicNoteRoute';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import state from './State.js';
import NoteContext from './NoteContext';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  
state = {
  notes: state.notes,
  folders: state.folders
}
  


  componentDidMount() {
    
    const urls = [
      'http://localhost:9090/notes',
      'http://localhost:9090/folders'

    ]

    Promise.all(urls.map((url) => {
      fetch(url)
      .then(response => response.json())
    }))
    .then(response => {
      console.log(response);)
    }    
  
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
  
  render() {

    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      submitDelete: this.submitDelete,
      submitDeleteDetail: this.submitDeleteDetail
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

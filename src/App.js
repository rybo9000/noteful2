import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import MainRoute from './MainRoute/MainRoute';
import DynamicFolderRoute from './DynamicFolderRoute/DynamicFolderRoute';
import DynamicNoteRoute from './DynamicNoteRoute/DynamicNoteRoute';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import state from './State.js';
import NoteContext from './NoteContext';

class App extends React.Component {
  
  state = {
    state: state
  }
  
  render() {

    const contextValue = {
      state: state
    }
    
    return (
      <NoteContext.Provider value={contextValue}>
        <div className="wrapper">
            <header>
              <HeaderTop />
            </header>
            <main>
              <Switch>
                <Route exact path='/' render={() => <MainRoute folders={this.state.state.folders} notes={this.state.state.notes} /> } />
                <Route path='/folder/:folderId' render={(props) => <DynamicFolderRoute folders={this.state.state.folders} notes={this.state.state.notes}   {...props}/>  } />
                <Route path='/note/:noteId' render={(props) => <DynamicNoteRoute folders={this.state.state.folders} notes={this.state.state.notes}   {...props} /> } />
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

export default App;

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
      state: this.state
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

export default App;

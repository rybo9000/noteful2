import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Sidebar from './Sidebar/Sidebar';
import AllNotes from './AllNotes/AllNotes';
import FolderNotes from './FolderNotes/FolderNotes';
import NoteDetail from './NoteDetail/NoteDetail';
import SidebarFolder from './SideBarFolder/SideBarFolder';
import SidebarNote from './SideBarNote/SideBarNote';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import state from './State.js';

class App extends React.Component {
  
  state = {
    state: state
  }
  
  render() {
    
    return (
      <div className="wrapper">
          <header>
            <HeaderTop />
          </header>
          <main>
            <div className="left">
            <Switch>
              <Route exact path='/' render={() => <Sidebar folders={this.state.state.folders} />} />
              <Route path='/folder/:folderId' render={(props) => <SidebarFolder folders={this.state.state.folders}  {...props}/>} />
              <Route path='/note/:noteId'  render={(props) => <SidebarNote folders={this.state.state.folders}  notes={this.state.state.notes} {...props}/>} />
            </Switch>
            </div>
            <div className="right">
              <Switch>
                <Route exact path='/' render={() => <AllNotes notes={this.state.state.notes} />} />
                <Route path='/folder/:folderId' render={(props) => <FolderNotes notes={this.state.state.notes} {...props}/>} />
                <Route path='/note/:noteId' render={(props) => <NoteDetail notes={this.state.state.notes} {...props}/>} />
              </Switch>
            </div>
          </main>
          <footer>
            Footer
          </footer>
        
        
      </div>
    )
  }
}

export default App;

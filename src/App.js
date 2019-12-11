import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Sidebar from './Sidebar/Sidebar';
import AllNotes from './AllNotes/AllNotes';
import FolderNotes from './FolderNotes/FolderNotes';
import Note from './Note/Note';
import { Route } from 'react-router-dom';
import './App.css';
import state from './State.js';

class App extends React.Component {
  
  state = {
    state: state
  }
  
  render() {
    
    return (
      <div class="wrapper">
        <body>
          <header>
            <HeaderTop />
          </header>
          <main>
            <div className="left">
              <Sidebar folders={this.state.state.folders}/>
            </div>
            <div className="right">
              <Route exact path='/' render={() => <AllNotes notes={this.state.state.notes} />} />
              <Route path='/folder/:folderId' component={FolderNotes} notes={this.state.state.notes}/>
              <Route path='/note/:noteId' component={Note} />
            </div>
          </main>
          <footer>
            Footer
          </footer>
        </body>
        
      </div>
    )
  }
}

export default App;

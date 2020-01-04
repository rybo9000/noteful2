import React from 'react';
import './App.css';
import MainRoute from './MainRoute/MainRoute';
import DynamicFolderRoute from './DynamicFolderRoute/DynamicFolderRoute';
import DynamicNoteRoute from './DynamicNoteRoute/DynamicNoteRoute';
import { Route, Switch } from 'react-router-dom';
import state from './State.js';


class App extends React.Component {

  state={
    folders: state.folders,
    notes: state.notes

  }
  
  render() {
    
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path='/' render={() => <MainRoute folders={this.state.folders} notes={this.state.notes}/>} />
          <Route path='/folder/:folderid' component={DynamicFolderRoute} />
          <Route path='/note/:noteid' component={DynamicNoteRoute} />
        </Switch>
      </div>
    )

}
}

export default App;

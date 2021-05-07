import React from 'react';
import Header from './components/header.component';

import { Switch , Route , Redirect} from 'react-router-dom';
import NotesPage from './pages/notespage.component';
import EditNotePage from './pages/editnotepage.component';
import AuthPage from './pages/authpage.component';


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="container my-5">
      <Switch>
        <Route exact path="/auth" component={AuthPage}></Route>
        <Route exact path="/notes" component={NotesPage}></Route>
        <Route exact path="/edit-note" component={EditNotePage}></Route>
        <Route exact path="/edit-note/:noteid" component={EditNotePage}></Route>
        <Redirect to="/auth"></Redirect>
      </Switch>
    </div>
     </React.Fragment>
  );
}

export default App;
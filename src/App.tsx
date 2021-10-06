import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminPanelPage from "./pages/AdminPanelPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin-panel">
          <AdminPanelPage/>
        </Route>
        <Route path="">
        </Route>
        <Route path="">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



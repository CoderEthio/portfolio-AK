import React from 'react';
import LandingPage from "./page/landingPage";
import ProjectPage from "./page/ProjectPage";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import {ProtectedRout} from './components/protected.rout'






function App() {
  return (
      <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} exact />

                {<ProtectedRout
                    exact
                    path="/projects"
                    component={ProjectPage}/> }
                  <Route path={"*"} component={()=>"404 NOT FOUND"}/>
            </Switch>
      </BrowserRouter>



  );
}
export default App;

import TextEditor from "./Components/TextEditor";
import { Switch, Route, Redirect } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Navbar from "./Components/Navbar/Navbar";
import { Divider } from "@material-ui/core";

function App() {
  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Redirect to={`documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:id">
        <TextEditor />
      </Route>
    </Switch>
    </div>
  );
}

export default App;

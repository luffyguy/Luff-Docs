import TextEditor from "./Components/TextEditor";
import { Switch, Route, Redirect } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={`documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:id">
        <TextEditor />
      </Route>
    </Switch>
  );
}

export default App;

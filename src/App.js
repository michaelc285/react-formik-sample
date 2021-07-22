
import { Route, Switch } from "react-router-dom";
import { ROOT, BASIC_FORM } from "./path";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import BasicFormComponent from "./components/BasicFormComponent";
import NavigationBarComponent from "./components/NavigationBarComponent";
import HomePageComponent from "./components/HomePageComponent";


function App() {
  return (
    <>
      <NavigationBarComponent />
      <Switch>
        <Route path={ROOT} exact component={HomePageComponent} />
        <Route path={BASIC_FORM} exact component={BasicFormComponent} />
      </Switch>
    </>
  );
}

export default App;


import { Route, Switch } from "react-router-dom";
import { ROOT, BASIC_FORM, FORMIK_FORM } from "./path";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import BasicForm from "./components/BasicForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path={ROOT} exact component={HomePage} />
        <Route path={BASIC_FORM} exact component={BasicForm} />
        <Route path={FORMIK_FORM} exact component={FormikForm} />
      </Switch>
    </>
  );
}

export default App;

import { useReducer, useMemo } from "react";
import { LayoutContext } from "./contexts/layoutContext";
import { measureReducer, initialMeasureState } from "./reducers/layoutReducer";
import { Route, Switch } from "react-router-dom";
import { ROOT, BASIC_FORM, FORMIK_FORM } from "./path";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// Components
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import BasicForm from "./components/BasicForm";
import FormikTest from "./components/FormikTest";
import Footer from "./components/Footer";

function App() {
  const [measure, measureDispatch] = useReducer(measureReducer, initialMeasureState);
  const layoutValue = useMemo(() => ({ measure, measureDispatch }), [measure, measureDispatch]);

  return (
    <LayoutContext.Provider value={layoutValue}>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <NavigationBar />
        <Switch>
          <Route path={ROOT} exact component={HomePage} />
          <Route path={BASIC_FORM} exact component={BasicForm} />
          <Route path={FORMIK_FORM} exact component={FormikTest} />
          <Route path={"*"} component={HomePage} />
        </Switch>

        <Footer />
      </div>
    </LayoutContext.Provider>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/main-page/MainPage";
import Header from "./components/header/Header";
import DetailsPage from "./pages/details-page/DetailsPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/details/:id" component={DetailsPage} />
        </Switch>
    </div>
  );
}

export default App;

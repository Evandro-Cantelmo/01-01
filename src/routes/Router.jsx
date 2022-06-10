import { AnimatePresence } from "framer-motion";

import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";

const Router = () => {
  const Location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={Location} key={Location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default Router;

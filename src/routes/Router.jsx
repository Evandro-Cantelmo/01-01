import { AnimatePresence } from "framer-motion";

import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { MessagesContextProvider } from "../components/Context/MessagesContext";

import Home from "../Pages/Home";
import NeedHelp from "../Pages/NeedHelp";

const Router = () => {
  const Location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={Location} key={Location.pathname}>
      <MessagesContextProvider>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/needhelp">
          <NeedHelp />
        </Route>
      </MessagesContextProvider>
      </Switch>
    </AnimatePresence>
  );
};
export default Router;

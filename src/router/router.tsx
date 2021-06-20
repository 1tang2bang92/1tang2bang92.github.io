import { useRecoilValue } from "recoil";
import { createMuiTheme } from "@material-ui/core/styles";

import Theme from "../atoms/Theme";

import Paper from "@material-ui/core/Paper";
import Navigation from "../components/Navigation/Navigation";
import Blog from "../pages/Blog";
import Prologue from "../pages/Prologue";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Post from "../pages/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    height: "100%",
    overflowY: "auto",
  },
});

function App() {
  const classes = useStyles();
  const themeOption = useRecoilValue(Theme.IsDarkTheme);
  const theme = createMuiTheme(themeOption);
  Theme.useStorageTheme();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.app} elevation={0} square>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Blog />
            </Route>
            <Route path="/prologue">
              <Prologue />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/post/:post_id" >
              <Post/>
            </Route>
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

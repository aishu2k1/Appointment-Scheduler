import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Footer, Content } from "./layout";
import { ApplicationProvider } from './state/context';
import Box from '@material-ui/core/Box';
import Home from './components/pages/home';
import Schedule from './components/pages/schedule';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <Fragment>
        <ApplicationProvider>
          <div id="container">
            <Content className={classes.root}>
            <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route exact path="/schedule" component={Schedule}>
              </Route>
              </Switch>
            </Content>
            <Box mt={8}>
              <Footer />
            </Box>
          </div>
        </ApplicationProvider>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;

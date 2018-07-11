import React, { Component } from 'react';
import { Router } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DetailsView from '../DetailsView/DetailsView';
import SidebarView from '../SidebarView/SidebarView';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <Grid container direction={'row'} className="App" spacing={0}>
        <Grid item key={0} xs={3} sm={2}>
          <Paper style={{ height: '100vh', overflow: 'auto' }}>
            <ErrorBoundary>
              <SidebarView />
            </ErrorBoundary>
          </Paper>
        </Grid>
        <Grid item key={1} xs={9} sm={10}>
          <Paper style={{ height: '100vh', overflow: 'auto' }}>
            <ErrorBoundary>
              <Router>
                <DetailsView path="/details/:articleId" />
              </Router>
            </ErrorBoundary>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;

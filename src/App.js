import React, { useState, useEffect } from 'react';
import Page from './pages/Page';
import Events from './pages/Events';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from './Layouts/DefaultLayout/DefaultLayout';

export default function App() {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios.get('https://urltobackend.org/')
    .then(function (response) {
      const pages = response.data;
      const sortedPages = pages.sort((a, b) => a.menu_order - b.menu_order)
      setPages(sortedPages);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, []);

  const availablePages = pages.map(page => page.slug).join('|');
  return (
    <Router>
      <DefaultLayout pages={pages}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        { pages.length > 0 &&
            <Switch>
              <Route exact path="/events">
                <Events />
              </Route>
              <Route exact path="/events/:eventId">
                <Events />
              </Route>
              <Route exact path={`/:pageSlug(${availablePages})`}>
                <Page pages={pages} />
              </Route>
              <Route exact path="/" component={() => <Redirect to="/home" />} />
              <Route exact path="/*">
                <h1>404</h1>
              </Route>
            </Switch>
        }
      </DefaultLayout>
    </Router>
  );
}
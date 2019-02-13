import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/home/HomePage';
import SearchPage from '../components/search/SearchPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/search" component={SearchPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
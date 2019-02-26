import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/home/HomePage';
import SearchPage from '../components/search/SearchPage';

const AppRouter = () => {
    const apiKey = 'a337cb9ccaa0c3b43011d85ff6246ced';
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} apiKey={apiKey} />
                    <Route path="/search" component={SearchPage} apiKey={apiKey} />
                </Switch>
            </div>
        </BrowserRouter>
)};

export default AppRouter;
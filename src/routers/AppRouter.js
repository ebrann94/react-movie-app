import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/home/HomePage';
import SearchPage from '../components/search/SearchPage';
import MoviePage from '../components/movie/MoviePage';

const AppRouter = () => {
    const apiKey = 'a337cb9ccaa0c3b43011d85ff6246ced';

    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route 
                        path="/" 
                        exact={true}
                        render={routeprops => (
                            <HomePage {...routeprops} apiKey={apiKey} />
                        )} 
                    />
                    <Route 
                        path="/search/:query" 
                        render={routeprops => (
                            <SearchPage {...routeprops} apiKey={apiKey} />
                        )}  
                    />
                    <Route 
                        path="/movie/:id"
                        render={routeprops => (
                            <MoviePage {...routeprops} apiKey={apiKey} />
                        )} 
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
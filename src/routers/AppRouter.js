import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/home/HomePage';
import ResultsList from '../components/shared/ResultsList';
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
                        render={routeProps => (
                            <ResultsList 
                                {...routeProps} 
                                url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`} 
                                title="Popular Movies"
                            />
                        )}
                    />
                    <Route 
                        path="/upcoming" 
                        render={routeProps => (
                            <ResultsList 
                                {...routeProps} 
                                url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`} 
                                title="Upcoming Movies"
                            />
                        )}
                    />
                    <Route 
                        path="/top-rated" 
                        render={routeProps => (
                            <ResultsList 
                                {...routeProps} 
                                url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`} 
                                title="Top Rated Movies"
                            />
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
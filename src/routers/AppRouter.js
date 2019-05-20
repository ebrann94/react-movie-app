import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/home/HomePage';
import SearchPage from '../components/search/SearchPage';
import MoviePage from '../components/movie/MoviePage';

class AppRouter extends React.Component {
    constructor() {
        super();

        this.state = {
            apiKey: 'a337cb9ccaa0c3b43011d85ff6246ced',
            currentMovieId: ''
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} apiKey={this.state.apiKey} />
                        <Route path="/search/:query" component={SearchPage} apiKey={this.state.apiKey} />
                        <Route path="/movie/:id" component={MoviePage} apiKey={this.state.apiKey} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

export default AppRouter;
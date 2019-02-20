import React from 'react';
import PopularList from './PopularList';
import NewReleaseList from './NewReleaseList';

const HomePage = () => (
    <div>
        <h1>Home Page!</h1>
        <PopularList />
        <NewReleaseList />
    </div>
);

export default HomePage;
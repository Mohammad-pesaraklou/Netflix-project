import React from 'react';
//api
import requests from '../services/Request';
//components
import Main from './Main';
import Row from './Row';

const Home = () => {
    return (
        <div>
            <Main />
            <Row title="Popular" fetchURL={requests.requestPopular} />
            <Row title="UpComing" fetchURL={requests.requestUpcoming} />
            <Row title="TopRated" fetchURL={requests.requestTopRated} />
            <Row title="Trending" fetchURL={requests.requestTrending} />
            <Row title="Horror" fetchURL={requests.requestHorror} />
        </div>
    );
};

export default Home;
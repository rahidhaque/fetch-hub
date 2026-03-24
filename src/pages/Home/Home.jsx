import React from 'react';
import Banner from '../../components/Banner/Banner';
import Trending from '../../components/Trending/Trending';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Trending apps={apps}></Trending>
        </div>
    );
};

export default Home;
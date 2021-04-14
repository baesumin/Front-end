import React from 'react';
import { TodayHappy } from './ScreenElements';

const HomeScreen = () => {
    return (
        <div className="app-body">
            <img
                width={720}
                src={process.env.PUBLIC_URL + '/mainUI.jpg'}
                alt="copy url"
            />
            <TodayHappy />
        </div>
    );
};

export default HomeScreen;

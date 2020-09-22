import React from 'react';
import getFeeds from '../utils/api';
import { cl } from '../utils/utils';

const StartPage = (props) => {
    const path = window.location.pathname;
    const userId = path.split('/').pop();
cl(`----------------userID = ${userId} ---------------`)
    const feeds = getFeeds(userId);
    console.log('-----------------feeds--------')
    console.dir(feeds);
    return (<div>
        ------Start page------
        userId : {userId}
    </div>)

}

export default StartPage;
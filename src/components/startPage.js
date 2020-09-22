import React from 'react';
// import getFeeds from '../utils/api';
import { cl } from '../utils/utils';
import feedsxH00033 from '../mocks/feedsxH00033';

const StartPage = (props) => {
    const path = window.location.pathname;
    const userId = path.split('/').pop();
cl(`----------------userID = ${userId} ---------------`)
    const feeds = feedsxH00033;//getFeeds(userId);
    console.log('-----------------feeds--------')
    console.dir(feeds);
    return (<div>
        ------Start page------
        userId : {userId}

        {feeds.firstName} {feeds.lastName}
        {feeds.posts.map((feedItem) => {
            return (<div>
                {feedItem.id}<br/>
                <img src={feedItem.picture} alt="post"/><br/>
            <b>{feedItem.message}</b>
                </div>)
        })}
    </div>)

}

export default StartPage;
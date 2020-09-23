import Axios from "axios";

const feedURL = 'https://forum.xhumanity.org/social/feed/';
// const feedURL = 'https://192.168.0.219:8443/social/feed/';
// const testURL = 'https://jsonplaceholder.typicode.com/users'
// const config = { xxx: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json' // 'Content-Type': 'application/json'
// }}

const getFeeds = (userID) => {
    Axios.get(`${feedURL}${userID}`)
    .then((response) => {
        return response.data;
    })
    .catch( (err) => {
        console.log('------error getting feeds-------')
        return {}
    })
}

export default getFeeds;
import Axios from "axios";
import { cl } from "./utils";

const feedURL1 = 'http://192.168.0.219:8080/social/feed/';
// const feedURL = 'https://192.168.0.219:8443/social/feed/';
const testURL = 'https://jsonplaceholder.typicode.com/users'
const config = {headers:{
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json' // 'Content-Type': 'application/json'
}}

const getFeeds = (userID) => {
    const url = `${feedURL1}${userID}`;
    cl(`------------netwerk call = ${url}`)
    // Axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    // Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    Axios.get(testURL, config)
    .then((result) => {
        console.log('------------response success-----------');
        console.log(result);
        return result;
    })
    .catch( (err) => {
        console.log('------error getting feeds-------')
    })
    // cl(`----get api call for userID = ${userID}------`)
    // let request = new XMLHttpRequest();
    // request.open("GET", url)
    // request.withCredentials = true;
    // request.setRequestHeader('Access-Control-Allow-Origin','*')
    // request.setRequestHeader('Content-Type','JSON')
    // request.send();
    // request.onload = () => {
    //     cl(request);
    //     if ( request.status === 200 ){
    //         cl(JSON.parse(request.response))
    //     }else{
    //         cl(`errlor ${request.status} ${request.statusText}`)
    //     }
    // }
}

export default getFeeds;
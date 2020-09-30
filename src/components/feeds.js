import React from 'react';
import { Container, Row} from "react-bootstrap";
import Axios from 'axios';
import feedsxH00033 from '../mocks/feedsxH00033';
import Feed from './feed';
import './Feeds.css';

class Feeds extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserFeeds: feedsxH00033,
            selectedPostId:"",
            error:""
        }
    }

    getFeeds = () => {
        const path = window.location.pathname;
        const userId = path.split('/').pop(); //xH00012
        const feedURL = 'https://forum.xhumanity.org/social/feed/';
        Axios.get(`${feedURL}${userId}`)
        .then((response) => {
            this.setState({
                currentUserFeeds:response.data
            })
        })
        .catch( (err) => {
            this.setState({error:"An error has ocured"})
        })
    }

    componentDidMount(){
        // this.getFeeds();
    }

    render(){
        const {currentUserFeeds, error} = this.state;
        return (<Container fluid className="FeedsContainer">
            <Row>
                <h1>
                    User: {currentUserFeeds.firstName} {currentUserFeeds.lastName}
                    <br/><br/>
                </h1>
            </Row>
            <Row>
                Posts:  
            </Row>
            <Row>{ error && (<div class="my-notify-error">{error}</div>)}</Row>
            <Row>
                {!error && currentUserFeeds?.posts?.map((feedItem) => (
                    feedItem.message && feedItem.picture &&
                    <Feed key={feedItem.id} 
                        feedItem={feedItem} 
                    />))}
            </Row>
        </Container>)
    }
}

export default Feeds;

import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Axios from 'axios';
import feedsxH00033 from '../mocks/feedsxH00033';
import Feed from './feed';
import './Feeds.css';

class Feeds extends React.Component {
    state = {
        currentUserFeeds: feedsxH00033,
        selectedPostId:"",
        error:"",
        userId: (new URL(window.location).searchParams).get('user'),
    }

    getFeeds = () =>{
        const { userId } = this.state;
        console.log('@debug userID', userId);
        const feedURL = 'https://webapp.xhumanity.org/social/feed/';
        Axios.get(`${feedURL}${userId}`)
        .then((response) => {
            this.setState({
                currentUserFeeds:response.data
            })
        })
        .catch( (err) => {
            this.setState({error:"An error has occurred"})
        })
    }

    componentDidMount(){
        this.getFeeds();
    }

    render(){
        const {currentUserFeeds, error, userId} = this.state;
        return (<Container className="FeedsContainer">
            <Row>
                <Col className="left">
                    <h1>
                        <span className="yellow">User:</span> {currentUserFeeds.firstName} {currentUserFeeds.lastName}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col className="left">
                    <h3>Posts:</h3>
                </Col>
            </Row>
            <Row>{ error && (<div class="my-notify-error">{error}</div>)}</Row>
            <Row>
                {!error && currentUserFeeds?.posts?.map((feedItem) => (
                    feedItem.message && feedItem.picture &&
                    <Feed key={feedItem.id}
                        feedItem={feedItem} userId={userId}
                    />))}
            </Row>
        </Container>)
    }
}

export default Feeds;

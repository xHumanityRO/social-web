import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
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
                        feedItem={feedItem}
                    />))}
            </Row>
        </Container>)
    }
}

export default Feeds;

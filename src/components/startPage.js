import React from 'react';
// import getFeeds from '../utils/api';
import { cl } from '../utils/utils';
import feedsxH00033 from '../mocks/feedsxH00033';
// Import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// End react-bootstrap components
const StartPage = (props) => {
    const path = window.location.pathname;
    const userId = path.split('/').pop();
cl(`----------------userID = ${userId} ---------------`)
    const feeds = feedsxH00033;//getFeeds(userId);
    console.log('-----------------feeds--------')
    console.dir(feeds);
    return (<Container fluid>
        ------Start page------
        userId : {userId}
        {feeds.firstName} {feeds.lastName}<br/><br/>
        <Row>
        {feeds.posts.map((feedItem) => {
            return (
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={feedItem.picture} alt="post" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {feedItem.message}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                //--------------- Previous display feed ---------------
                // <div class="col-md-3" id={feedItem.id}>
                //     <div class="col-md-6">
                //         <img src={feedItem.picture} alt="post"/><br/>
                //     </div>
                //     <div class="col-md-6">
                //         <b>{feedItem.message}</b>
                //     </div>
                // </div>

            )
        })}
        </Row>
    </Container>)

}

export default StartPage;

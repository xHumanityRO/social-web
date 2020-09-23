import React from 'react';
// import feedsxH00033 from '../mocks/feedsxH00033';
// Import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// End react-bootstrap components
import Axios from 'axios';

class StartPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserFeeds: {}
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
        })
    }

    componentDidMount(){
        this.getFeeds();
    }
    
    render(){
        const {currentUserFeeds} = this.state;
        return (<Container fluid>
            ------Start page------
            {currentUserFeeds.firstName} {currentUserFeeds.lastName}<br/><br/>
            <Row>
                {currentUserFeeds?.posts?.map((feedItem) => {
                    return (<div key={feedItem.id}>
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
                    </div>)
                })}
            </Row>
        </Container>)
    }
}

export default StartPage;

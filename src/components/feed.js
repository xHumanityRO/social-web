import React from 'react';
import { Col, Card, Button } from "react-bootstrap";
import Axios from 'axios';

class Feed extends React.Component {
    state = {
        postSuccessMessage: "",
        postErrorMessage: ""
    }

    onSelectPost = (feedItem) =>{
        const feedSubmitURL = 'https://webapp.xhumanity.org/social/feed';
        const { userId } = this.props;
        Axios.post(feedSubmitURL,{
            "userId": userId,
            "videoUrl": feedItem.picture
        })
        .then((response) => {
            this.setState({postSuccessMessage : "sent with success"});
        })
        .catch( (err) => {
            this.setState({postErrorMessage : "An error has ocured"});
        })
    }

    render  ()  {
        const { feedItem } = this.props;
        const {postErrorMessage, postSuccessMessage} = this.state;

        return (<div key={feedItem.id}>
            <Col xs={12} md={4}>
                <Card style={{ width: '18rem' }} >
                    {feedItem.picture
                        && (<Card.Img variant="top"
                                src={feedItem.picture}
                                alt="missing image post" />)}
                    <Card.Body>
                        {feedItem.message
                            && (<Card.Text>
                                    {`${feedItem.message.substring(0,50)}${feedItem.message.length > 49 ? '...': ''}`}
                                </Card.Text>)}
                        <Button variant="primary" onClick={() => this.onSelectPost(feedItem)}>Submit selected post</Button>
                    </Card.Body>
                    {postErrorMessage && (<div className="my-notify-error">{postErrorMessage}</div>)}
                    {postSuccessMessage && (<div className="my-notify-success">{postSuccessMessage}</div>)}
                </Card>
            </Col>
        </div>)
    }
}
export default Feed;

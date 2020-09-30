import React from 'react';
import { Col, Card, Button } from "react-bootstrap";
import Axios from 'axios';

class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postSuccessMessage: "",
            postErrorMessage: ""
        }
    }
    
    onSelectPost = (feedId) =>{
        const {postErrorMessage, postSuccessMessage} = this.state;

        console.log('on select post feedID: ', feedId);
        if ( feedId === '3418160981537358_2254591484560986'){
            this.setState({postErrorMessage : "An error has ocured"});
        }else{
            this.setState({postSuccessMessage : "sent with success"});
        }
        // const feedSubmitURL = 'https://forum.xhumanity.org/social/feed/';
        // Axios.post(feedSubmitURL,{postId:feedId})
        //     .then((response) => {
            // this.setState({postSuccessMessage : "sent with success"});
            // })
            // .catch( (err) => {
                //     postErrorMessage="An error has ocured"
                // })
                
            }
    render  ()  {
        const { feedItem } = this.props;
        const {postErrorMessage, postSuccessMessage} = this.state;

        return (<div key={feedItem.id}>
            <Col>
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
                        <Button variant="primary" onClick={() => this.onSelectPost(feedItem.id)}>Submit selected post</Button>
                    </Card.Body>
                    {postErrorMessage && (<div className="my-notify-error">{postErrorMessage}</div>)}   
                    {postSuccessMessage && (<div className="my-notify-success">{postSuccessMessage}</div>)}   
                </Card>
            </Col>
        </div>)
    }
}    
export default Feed;

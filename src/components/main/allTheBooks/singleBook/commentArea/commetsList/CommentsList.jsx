import { Component } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SingleComment from "./SingleComment";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const TOKEN = process.env.REACT_APP_TOKEN;

class CommentsList extends Component {
  handleClick = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch(`${ENDPOINT}comments/${event.target.id}`, {
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        },
        "method": "DELETE",
      });
      if (response.ok) {
        console.log("DELETE OK");
      } else {
        console.log('Contact server, but error');
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        {
          this.props.comments.map((comment, index) => (
            <Row key={index}>
              <Col xs={9}>
                <SingleComment key={index} comment={comment} />
              </Col>
              <Col xs={3}>
                <Button variant="danger" id={comment._id} key={comment._id} type="button" onClick={this.handleClick}>Delete</Button>
              </Col>
            </Row>
          ))
        }
      </div >
    );
  }
}

export default CommentsList;
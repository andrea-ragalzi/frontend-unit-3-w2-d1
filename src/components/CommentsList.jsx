import { Component } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SingleComment from "./SingleComment";

const ENDPOINT = process.env.ENDPOINT;
const TOKEN = process.env.REACT_APP_CLIENT_ID;

class CommentsList extends Component {
  handleClick = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch(`${ENDPOINT}/comments`, {
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
            <Row>
              <Col>
                <SingleComment key={index} comment={comment} />
              </Col>
              <Col>
                <Button key={`10000${index}`} type="button" onClick={this.handleClick}>Delete</Button>
              </Col>
            </Row>
          ))
        }
      </div >
    );
  }
}

export default CommentsList;
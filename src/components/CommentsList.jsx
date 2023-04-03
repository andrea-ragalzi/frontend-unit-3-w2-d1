import { Component } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SingleComment from "./SingleComment";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

class CommentsList extends Component {
  handleClick = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch(`${URL}`, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2QzMGY4MWI0MjAwMTM5YjI4NzMiLCJpYXQiOjE2ODA1MTc0MzAsImV4cCI6MTY4MTcyNzAzMH0.t8t6swOWjFD_2KZu7PvUPLE5FbU5K3yQ0LBrF_07sfs",
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
import { Component } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

class AddComment extends Component {
    state = {
        comment: '',
        rate: 0,
        elementId: this.props.asin
    }

    handleTextChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleRatingChange(event) {
        this.setState({
            rate: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch(URL, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2QzMGY4MWI0MjAwMTM5YjI4NzMiLCJpYXQiOjE2ODA1MTc0MzAsImV4cCI6MTY4MTcyNzAzMH0.t8t6swOWjFD_2KZu7PvUPLE5FbU5K3yQ0LBrF_07sfs",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                body: JSON.stringify(this.state),
            });
            if (response.ok) {
                console.log("POST OK");
                this.setState({
                    comment: '',
                    rate: 0
                })
            } else {
                console.log('Contact server, but error');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Form onSubmit={(event) => {
                this.handleSubmit(event)
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            onChange={(event) => {
                                this.handleTextChange(event)
                            }}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Select aria-label="Default select example" onChange={(event) => {
                    this.handleRatingChange(event)
                }}>
                    <option>Select the rate</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </Form.Select>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        );
    }
}

export default AddComment;
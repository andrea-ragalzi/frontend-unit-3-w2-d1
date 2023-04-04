import { Component } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ENDPOINT = process.env.ENDPOINT;
const TOKEN = process.env.TOKEN;

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
            let response = await fetch(ENDPOINT, {
                headers: {
                    "Authorization": `Bearer ${TOKEN}`,
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
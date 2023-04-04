import { Component } from "react"
import CommentsList from "./CommentsList";

const ENDPOINT = process.env.ENDPOINT;
const TOKEN = process.env.REACT_APP_CLIENT_ID;

class CommentArea extends Component {
    state = {
        comments: [],
    }
    getComments = async () => {
        try {
            let response = await fetch(`${ENDPOINT}/comments/${this.props.asin}`, {
                headers: {
                    "Authorization": `Bearer ${TOKEN}`
                }
            });
            if (response.ok) {
                let data = await response.json()
                console.log(data);
                this.setState({
                    comments: data
                })
            } else {
                console.log('Errore nella chiamata');
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getComments();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selected && !prevProps.selected) {
            console.log('UPDATE');
            this.getComments();
        }
    }

    render() {
        console.log(this.state.comments);
        return (
            this.props.selected && this.state.comments && (
                <div className="comment-area">
                    <CommentsList comments={this.state.comments}></CommentsList>
                </div>
            )
        )
    }
}

export default CommentArea;
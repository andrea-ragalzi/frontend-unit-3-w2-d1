import { Component } from "react"
import CommentsList from "./commetsList/CommentsList";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const TOKEN = process.env.REACT_APP_TOKEN;

class CommentArea extends Component {
    state = {
        comments: [],
    }
    getComments = async () => {
        try {
            let response = await fetch(`${ENDPOINT}comments/${this.props.asin}`, {
                headers: {
                    "Authorization": `Bearer ${TOKEN}`
                }
            });
            if (response.ok) {
                let data = await response.json()
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
            this.getComments();
        }
    }

    render() {
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
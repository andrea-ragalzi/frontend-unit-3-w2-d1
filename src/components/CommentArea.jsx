import { Component } from "react"
import CommentsList from "./CommentsList";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

class CommentArea extends Component {
    state = {
        comments: [],
    }
    getComments = async () => {
        try {
            let response = await fetch(`${URL}${this.props.asin}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2QzMGY4MWI0MjAwMTM5YjI4NzMiLCJpYXQiOjE2ODA1MTc0MzAsImV4cCI6MTY4MTcyNzAzMH0.t8t6swOWjFD_2KZu7PvUPLE5FbU5K3yQ0LBrF_07sfs"
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
const getStars = (rate) => {
    let result = '';
    for (let i = 0; i < rate; i++) {
        result += '⭐';
    }
    return result;
}

const SingleComment = (props) => {
    const { author, comment, rate } = props.comment;

    return (
        <div className="single-comment">
            <h4>{author}</h4>
            <h2>{comment}</h2>
            <p>{getStars(rate)}</p>
        </div>
    );
}

export default SingleComment;

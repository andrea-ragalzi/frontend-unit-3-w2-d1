function SingleComment(props) {
    const { author, comment, rate } = props.comment;

    return (
        <div className="single-comment">
            <h4>{author}</h4>
            <h2>{comment}</h2>
            <p>{rate}</p>
        </div>
    );
}

export default SingleComment;

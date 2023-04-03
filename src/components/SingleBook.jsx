import '../style/SingleBook.scss'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Component } from "react";
import CommentArea from './CommentArea';
import AddComment from './AddComment';

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

class SingleBook extends Component {
    handleBookSelect = () => {
        this.props.onSelect(this.props.book.asin);
    }

    render() {
        const { book, selected } = this.props;
        return (
            selected ? (
                <Col xs={12} className="p-0 mx-1 mb-5">
                    <Row>
                        <Col xs={6}>
                            <CommentArea asin={book.asin} selected={selected}></CommentArea>
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={12}>
                                    <Card onClick={this.handleBookSelect} className={selected ? "selected-card" : ""}>
                                        <Card.Img variant="top" src={book.img} />
                                        <Card.Body>
                                            <Card.Title>{truncateString(book.title, 40)}</Card.Title>
                                            <Card.Text>{book.price}</Card.Text>
                                            <Button variant="dark">Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12}>
                                    <AddComment asin={book.asin}></AddComment>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            ) : (
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-0 mx-1 mb-5">
                    <Card onClick={this.handleBookSelect} className={selected ? "selected-card" : ""}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{truncateString(book.title, 40)}</Card.Title>
                            <Card.Text>{book.price}</Card.Text>
                            <Button variant="dark">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )

        );
    }
}

export default SingleBook;
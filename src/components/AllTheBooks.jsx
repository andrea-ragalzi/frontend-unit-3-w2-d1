import '../style/AllTheBooks.scss'
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookList from "./BookList";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'


class AllTheBooks extends Component {
    state = {
        selectedCategory: fantasy,
        selectedBooks: fantasy,
        showWallCategory: true,
        showWallBook: false
    };

    filterBookList = (bookList, keyword) => {
        if (!bookList) {
            return [];
        }
        return (
            bookList.filter(book =>
                book.title.toLowerCase().includes(keyword.toLowerCase())
            )
        );
    };

    handleBookClick = (category) => {
        this.setState({
            selectedCategory: category,
            selectedBooks: category,
            showWallCategory: !this.state.showWallCategory,
            showWallBook: !this.state.showWallBook
        });
    };
    render() {
        return (
            <Container fluid className="p-0 mb-5">
                {
                    this.state.showWallCategory && (
                        <Row className="justify-content-center align-items-center mt-5 mx-0">
                            {
                                [fantasy, history, horror, romance, scifi].map((category, index) => {
                                    return (
                                        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="p-0 mx-1 mb-5">
                                            <h2>{category[0].category.toUpperCase()}</h2>
                                            <Carousel>
                                                {
                                                    category.map(book => {
                                                        return (
                                                            <Carousel.Item key={book.asin}>
                                                                <img
                                                                    className="d-block w-100"
                                                                    src={book.img}
                                                                    alt="Book Cover"
                                                                    onClick={() => this.handleBookClick(category)}
                                                                />
                                                            </Carousel.Item>
                                                        )
                                                    })
                                                }
                                            </Carousel>
                                        </Col>

                                    )
                                })
                            }
                        </Row>
                    )}
                {this.state.showWallBook && (
                    <>
                        <Row className="justify-content-center align-items-center mx-5">
                            <Col xs={6}>
                                <Button variant="dark" className="my-5 p-4" onClick={() => this.handleBookClick(this.state.selectedCategory)}>
                                    Back to Category
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Search Title"
                                        aria-label="Search Title"
                                        onChange={(event) => {
                                            this.setState({
                                                selectedBooks: this.filterBookList(this.state.selectedCategory, event.target.value)
                                            });
                                        }}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <BookList books={this.state.selectedBooks}></BookList>
                        <Row>
                            <Col xs={12} className='text-center'>
                                <a className="text-light back-link" href="#root">Back To Top</a>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        );
    }
}

export default AllTheBooks;
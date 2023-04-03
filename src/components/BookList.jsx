import { Component } from "react";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        selectedAsin: null
    }

    handleBookSelect = (asin) => {
        if (asin !== this.state.selectedAsin) {
            this.setState({ selectedAsin: asin });
        } else {
            this.setState({ selectedAsin: null });
        }
    }

    render() {
        const { selectedAsin } = this.state;
        const book = this.props.books.find(book => book.asin === selectedAsin) || null;
        return (
            <Row className="justify-content-center align-items-center mx-0" >
                {
                    !this.state.selectedAsin ? (this.props.books.map(book => {
                        return (
                            <SingleBook
                                key={book.asin}
                                book={book}
                                selected={selectedAsin === book.asin}
                                onSelect={this.handleBookSelect}
                            />
                        )
                    })) : (
                        <SingleBook
                            key={book.asin}
                            book={book}
                            selected={selectedAsin === book.asin}
                            onSelect={this.handleBookSelect}
                        />
                    )
                }
            </Row>
        )
    }
}

export default BookList;

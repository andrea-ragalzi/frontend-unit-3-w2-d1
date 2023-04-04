
import { useState } from 'react'
import Row from "react-bootstrap/Row";
import SingleBook from "./singleBook/SingleBook";

const BookList = (props) => {
    const [selectedAsin, setSelectedAsin] = useState(null);
    const book = props.selectedBooks.find(book => book.asin === selectedAsin) || null;

    return (
        <Row className="justify-content-center align-items-center mx-0" >
            {
                !selectedAsin ? (props.selectedBooks.map(book => {
                    return (
                        <SingleBook
                            key={`${book.category}_${book.asin}`}
                            book={book}
                            selected={selectedAsin === book.asin}
                            onSelect={() => { setSelectedAsin(book.asin) }}
                        />
                    )
                })) : (
                    <SingleBook
                        key={`${book.category}_${book.asin}`}
                        book={book}
                        selected={selectedAsin === book.asin}
                        onSelect={() => { setSelectedAsin(book.asin) }}
                    />
                )
            }
        </Row>
    )
}

export default BookList;

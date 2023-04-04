import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import WallCategories from "./Categories";
import BookList from "./BookList";
import fantasy from '../../../data/fantasy.json'
import history from '../../../data/history.json'
import horror from '../../../data/horror.json'
import romance from '../../../data/romance.json'
import scifi from '../../../data/scifi.json'
import Dropdown from 'react-bootstrap/Dropdown';


class AllTheBooks extends Component {
    state = {
        dropdownLabel: 'All the books',
        selectedCategory: [],
        selectedBooks: [],
        showWallCategory: true,
        showWallBook: false
    };

    filterBookList = (bookList, keyword) => {
        console.log(bookList);
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

    handleDropdown = (event) => {
        event.preventDefault();
        const category = event.target.text;
        if (category === 'Fantasy') {
            this.setState({
                dropdownLabel: 'Fantasy',
                selectedCategory: fantasy,
                selectedBooks: fantasy,
                showWallCategory: false,
                showWallBook: true
            });
        }
        else if (category === 'History') {
            this.setState({
                dropdownLabel: 'History',
                selectedCategory: history,
                selectedBooks: history,
                showWallCategory: false,
                showWallBook: true
            });
        }
        else if (category === 'Horror') {
            this.setState({
                dropdownLabel: 'Horror',
                selectedCategory: horror,
                selectedBooks: horror,
                showWallCategory: false,
                showWallBook: true
            });
        }
        else if (category === 'Romance') {
            this.setState({
                dropdownLabel: 'Romance',
                selectedCategory: romance,
                selectedBooks: romance,
                showWallCategory: false,
                showWallBook: true
            });
        }
        else if (category === 'Scifi') {
            this.setState({
                dropdownLabel: 'Scifi',
                selectedCategory: scifi,
                selectedBooks: scifi,
                showWallCategory: false,
                showWallBook: true
            });
        }
        else {
            this.setState({
                dropdownLabel: 'All the books',
                selectedCategory: [],
                selectedBooks: [],
                showWallCategory: true,
                showWallBook: false
            });
        }
    }

    handleSearch = (event) => {
        event.preventDefault();
        if (!this.selectedCategory) {
            this.setState({
                selectedCategory: [],
                selectedBooks: this.filterBookList(fantasy.concat(history, horror, romance, scifi), event.target.value),
                showWallCategory: false,
                showWallBook: true
            });
        }
        else{
            this.setState({
                selectedCategory: [],
                selectedBooks: this.filterBookList(this.selectedCategory, event.target.value),
                showWallCategory: false,
                showWallBook: true
            });
        }
    }

    render() {
        return (
            <Container fluid className="p-0 mb-5 all-the-books">
                <main>
                    <Row className="justify-content-center align-items-center mx-5">
                        <Col xs={6}>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    {this.state.dropdownLabel}
                                </Dropdown.Toggle>

                                <Dropdown.Menu onClick={this.handleDropdown}>
                                    <Dropdown.Item >All</Dropdown.Item>
                                    <Dropdown.Item >Fantasy</Dropdown.Item>
                                    <Dropdown.Item >History</Dropdown.Item>
                                    <Dropdown.Item>Horror</Dropdown.Item>
                                    <Dropdown.Item>Romance</Dropdown.Item>
                                    <Dropdown.Item>Scifi</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col xs={6}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search Title"
                                    aria-label="Search Title"
                                    onChange={(event) => {this.handleSearch(event)}}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center mx-5">
                        <Col xs={12}>

                        </Col>
                        {this.state.showWallCategory && (
                            <WallCategories categories={[fantasy, history, horror, romance, scifi]} />
                        )}
                        {this.state.showWallBook && (
                            <BookList selectedBooks={this.state.selectedBooks} />
                        )}
                        <Row>
                            <Col xs={12} className='text-center'>
                                <a className="text-light back-link" href="#root">Back To Top</a>
                            </Col>
                        </Row>
                    </Row>
                </main>
            </Container >
        );
    }
}

export default AllTheBooks;
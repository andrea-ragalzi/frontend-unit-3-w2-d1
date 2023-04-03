import { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';



class SearchBar extends Component {
    render() {
        return (
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
        )
    }
}

export default SearchBar;
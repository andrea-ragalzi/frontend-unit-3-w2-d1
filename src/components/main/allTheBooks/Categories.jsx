import { Component } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';

class WallCategories extends Component {

    render() {
        return (
            <Row className="justify-content-center align-items-center mt-5 mx-0">
                {
                    this.props.categories.map((category, index) => {
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
        )
    }
}

export default WallCategories;
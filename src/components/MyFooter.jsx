import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyFooter() {
    return (
        <Container fluid className='p-3 text-white bg-dark'>
                <Row >
                    <Col xs={12} sm={4}>
                        <p>
                            GitHub
                        </p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <p>
                            LinkedIn
                        </p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <p>
                            StackOverFlow
                        </p>
                    </Col>
                </Row>
        </Container>

    );
}

export default MyFooter;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Welcome() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} className='px-0'>
                    <div className="h-100 p-5 text-white bg-dark">
                        <h2>Welcome to Epibooks!</h2>
                        <p>A Shop 65 years in the making</p>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default Welcome;
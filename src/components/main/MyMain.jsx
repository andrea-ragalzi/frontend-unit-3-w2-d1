import AllTheBooks from './allTheBooks/AllTheBooks';
import Container from 'react-bootstrap/Container';

function MyMain() {
    return (
        <Container fluid>
            <main>
                <AllTheBooks />
            </main>
        </Container>
    );
};

export default MyMain;
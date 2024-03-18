import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

class AllTheBooks extends Component {
  state = {
    book: fantasy,
  };
  render() {
    return (
      <Container>
        <Button onClick={() => this.setState({ book: fantasy })}>Fantasy</Button>
        <Button onClick={() => this.setState({ book: history })}>History</Button>
        <Button onClick={() => this.setState({ book: horror })}>Horror</Button>
        <Button onClick={() => this.setState({ book: romance })}>Romance</Button>
        <Button onClick={() => this.setState({ book: scifi })}>Scifi</Button>
        <Row>
          {this.state.book.map(book => {
            const title = book.title.length < 25 ? book.title : book.title.slice(0, 23) + "...";

            return (
              <Col xs={6} md={4} lg={3} xl={2} key={book.asin}>
                <Card className={this.props.card}>
                  <Card.Img variant="top" src={book.img} className={this.props.image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Card.Text className="text-danger text-decoration-underline">{book.price + "$"}</Card.Text>
                    <Button variant="success" className="button">
                      Compra
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;

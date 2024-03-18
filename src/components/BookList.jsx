import { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    search: "",
    asinBook: "",
  };

  handleAsin = data => {
    this.setState({
      asinBook: data,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci un libro da cercare"
                onChange={e => {
                  this.setState({ search: e.target.value });
                }}
                value={this.state.search}
              />
            </Form.Group>
          </Form>
        </Row>

        <Row>
          <Col xs={8}>
            <Row>
              {this.props.arrayBooks
                .filter(book => book.title.includes(this.state.search))
                .map(filteredBook => {
                  return (
                    <SingleBook
                      book={filteredBook}
                      image="image"
                      card="card"
                      button="button"
                      selected={this.handleSelected}
                      asinBook={this.handleAsin}
                      asinComparated={this.state.asinBook}
                      key={filteredBook.asin}
                    />
                  );
                })}
            </Row>
          </Col>
          <Col xs={4}>{this.state.asinBook && <CommentArea asin={this.state.asinBook} />}</Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;

import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: this.props.book.asin,
  };

  changeStateSelected = () => {
    this.setState(
      prevState => ({
        selected: !prevState.selected,
      }),
      () => {
        this.props.selected(this.state.selected);
        this.sendAsin();
      }
    );
  };

  sendAsin = () => {
    // if (this.state.selected) {
    this.props.asinBook(this.state.asin);
    // }
  };

  render() {
    const title =
      this.props.book.title.length < 25 ? this.props.book.title : this.props.book.title.slice(0, 23) + "...";

    return (
      <Col xs={6} md={4} lg={3} xl={2} key={this.props.book.asin}>
        <Card
          className={`${this.props.card} ${
            this.state.selected && this.props.asinComparated === this.props.book.asin ? "selected" : ""
          }`}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className={this.props.image}
            onClick={e => {
              this.changeStateSelected();
            }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text className="text-danger text-decoration-underline">{this.props.book.price + "$"}</Card.Text>
            <Button variant="success" className="button">
              Compra
            </Button>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </Col>
    );
  }
}

export default SingleBook;

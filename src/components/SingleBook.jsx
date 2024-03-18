import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class SingleBook extends Component {
  state = {
    asin: this.props.book.asin,
  };

  sendAsin = () => {
    this.props.asinBook(this.state.asin);
  };

  diselected = () => {
    if (this.props.asinComparated === this.props.book.asin) {
      this.props.asinBook(null);
    }
  };

  render() {
    const title =
      this.props.book.title.length < 25 ? this.props.book.title : this.props.book.title.slice(0, 23) + "...";

    return (
      <Col xs={6} md={4} lg={3} xl={2} key={this.props.book.asin}>
        <Card className={`${this.props.card} ${this.props.asinComparated === this.props.book.asin ? "selected" : ""}`}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className={this.props.image}
            onClick={e => {
              this.sendAsin();
              this.diselected();
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
      </Col>
    );
  }
}

export default SingleBook;

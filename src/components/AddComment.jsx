import { Component } from "react";
import { Button, Form } from "react-bootstrap";

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTA0MjIwMDgsImV4cCI6MTcxMTYzMTYwOH0.ZGRoVV0MOKMtlQCyCGGRkPab-xxOgn2Whvl030CXnE4";

const initialStateForm = {
  comment: "",
  rate: "",
  elementId: "",
};

class AddComment extends Component {
  state = {
    form: initialStateForm,
  };

  addComment = e => {
    e.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify(this.state.form),
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    })
      .then(response => {
        if (response.ok) {
          window.alert("Commento aggiunto con successo!");

          this.setState({
            form: initialStateForm,
          });
        } else {
          window.alert("Errore, riprova più tardi!");
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  render() {
    return (
      <Form className="my-3" onSubmit={this.addComment}>
        <Form.Group className="mb-3">
          <Form.Label>Add Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="add comment"
            required
            onChange={e => {
              this.setState({
                form: { ...this.state.form, comment: e.target.value, elementId: this.props.singleBook },
              });
            }}
            value={this.state.form.comment}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          required
          onChange={e => {
            this.setState({ form: { ...this.state.form, rate: e.target.value } });
          }}
          value={this.state.form.rate}
        >
          <option>Add Rate</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Button className="mt-2" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}

export default AddComment;

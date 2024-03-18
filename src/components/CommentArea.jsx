import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTA0MjIwMDgsImV4cCI6MTcxMTYzMTYwOH0.ZGRoVV0MOKMtlQCyCGGRkPab-xxOgn2Whvl030CXnE4";

class CommentArea extends Component {
  state = {
    commentsArray: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(commentsArrayFromAPI => {
        console.log(commentsArrayFromAPI);
        this.setState({
          commentsArray: commentsArrayFromAPI,
          isLoading: false,
        });
      })
      .catch(error => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading === true && (
          <div>
            <Spinner animation="border" variant="success" />
          </div>
        )}

        <CommentsList commentsList={this.state.commentsArray} singleBookAsin={this.props.asin} />

        {this.state.isLoading === false && this.state.isError === false && <AddComment singleBook={this.props.asin} />}

        {this.state.isError === true && (
          <div>
            <Alert variant="danger">Qualcosa è andato storto</Alert>
          </div>
        )}
      </>
    );
  }
}

export default CommentArea;

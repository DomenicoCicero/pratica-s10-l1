import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTA0MjIwMDgsImV4cCI6MTcxMTYzMTYwOH0.ZGRoVV0MOKMtlQCyCGGRkPab-xxOgn2Whvl030CXnE4";

class CommentsList extends Component {
  deleteComment = commentId => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    })
      .then(response => {
        if (response.ok) {
          window.alert("Commento eliminato con successo");
        } else {
          window.alert("Errore nell'eliminazione del commento");
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  render() {
    return (
      <ListGroup>
        <p>Comments:</p>
        {this.props.commentsList.map(singleComment => {
          return (
            <ListGroup.Item key={singleComment._id}>
              {singleComment.comment} rate:{singleComment.rate}/5
              <Button onClick={() => this.deleteComment(singleComment._id)} className="bg-danger ms-1" type="button">
                Elimina
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentsList;

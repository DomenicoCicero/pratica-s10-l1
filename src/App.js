import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import fantasy from "./books/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <SingleBook book={fantasy[0]} image="image" card="card" button="button" /> */}
      {/* <AllTheBooks image="image" card="card" button="button" /> */}
      <BookList arrayBooks={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;

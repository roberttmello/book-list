import "./App.css";
import BookList from "./components/BookList";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <div className="container">
      <h1>Book List</h1>
      <BookList />
      <Newsletter />
    </div>
  );
};

export default App;

import Book from "./Book";
import "./BookList.css";

import { books } from "../data/books";

const BookList = () => {
  return (
    <section className="bookList">
        <Book books={books} />
    </section>
  );
};
export default BookList;

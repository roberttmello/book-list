import Book from "./Book";
import "./BookList.css";

import { books } from "../data/books";

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
export default BookList;

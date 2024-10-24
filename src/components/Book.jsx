import "./Book.css";

import PropTypes from "prop-types";

const Book = ({ books }) => {
  
  return (
    <>
      {books.map((book) => (
        <div className="book" key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.imageURL} alt={"Book image" + book.id} />
          <p>{book.description}</p>
        </div>
      ))}
    </>
  );
};

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Book;

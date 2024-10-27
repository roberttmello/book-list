import "./Book.css";

import PropTypes from "prop-types";

const Book = ({ id, title, author, imageURL, description }) => {
  return (
    <>
      <div className="book">
        <h3>{title}</h3>
        <span>{author}</span>
        <img src={imageURL} alt={"Book image" + id} />
        <p>{description}</p>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Book;

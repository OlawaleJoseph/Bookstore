import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  const {
    id, title, author, category,
  } = book;
  return (
    <tr className="text-primary">
      <td>
        {id}
      </td>
      <td>
        {title}
      </td>
      <td>
        {author}
      </td>
      <td>
        {category}
      </td>
      <td>
        <button onClick={() => handleRemoveBook(id)} type="button">Delete</button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;

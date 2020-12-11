import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const {
    id, title, author, category,
  } = book;
  return (
    <tr>
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
};

export default Book;

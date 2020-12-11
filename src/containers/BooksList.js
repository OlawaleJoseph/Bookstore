import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { generateRandomNumber } from '../common';

function BooksList({ books }) {
  const allBooks = books.map(book => <Book book={book} key={generateRandomNumber()} />);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {allBooks}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);

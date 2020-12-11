import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { generateRandomNumber } from '../common';
import { removeBook } from '../actions';

function BooksList({ books, deleteBook }) {
  const handleRemoveBook = id => deleteBook(id);

  const allBooks = books.map(book => (
    <Book
      id={generateRandomNumber()}
      handleRemoveBook={handleRemoveBook}
      book={book}
      key={generateRandomNumber()}
    />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Action</th>
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
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

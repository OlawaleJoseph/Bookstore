import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { generateRandomNumber } from '../common';
import { removeBook, filterBooks } from '../actions';
import Filter from '../components/categoryFilter';

function BooksList({ books, deleteBook, filterBooks }) {
  const handleRemoveBook = id => deleteBook(id);
  const handleFilter = e => filterBooks(e.target.value);

  const allBooks = books.map(book => (
    <Book
      id={generateRandomNumber()}
      handleRemoveBook={handleRemoveBook}
      book={book}
      key={generateRandomNumber()}
    />
  ));
  return (
    <div>
      <Filter handleFilter={handleFilter} />
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
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(removeBook(id)),
  filterBooks: category => dispatch(filterBooks(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

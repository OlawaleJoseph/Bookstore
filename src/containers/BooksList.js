import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { generateRandonNumber } from '../common';

function BooksList({ books }) {
  const allBooks = books.map(book => <Book book={book} key={generateRandonNumber()} />);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Categories</th>
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

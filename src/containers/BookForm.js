import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions';
import { categories, generateRandomNumber } from '../common';

const initialValue = {
  title: '',
  author: '',
  category: '',
};
const BookForm = ({ createBook }) => {
  const [input, setInput] = useState(initialValue);
  const allCategories = categories.map(category => (
    <option
      key={generateRandomNumber()}
      value={category}
    >
      {category}
    </option>
  )); const handleChange = e => {
    const { value } = e.target;
    setInput({ ...input, [e.target.name]: value.toUpperCase() });
  };
  const validateInputError = () => {
    const { title, author, category } = input;
    let error = '';
    if (!title) {
      error = 'Title is required';
    } else if (title.length < 2) {
      error = 'Title should have minimum of two(2) characters';
    } else if (!author) {
      error = 'Author is required';
    } else if (author.length < 3) {
      error = 'Author should have minimum of three(3) characters';
    } else if (!category) {
      error = 'Category is required';
    }
    return error;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const error = validateInputError();
    if (!error) {
      console.log(input);
      createBook({ ...input, id: generateRandomNumber() });
      setInput(initialValue);
    } else {
      document.querySelector('#error').textContent = error;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p id="error" />
        <input type="text" name="title" value={input.title} placeholder="Title" onChange={handleChange} />
        <input type="text" name="author" value={input.author} placeholder="Author" onChange={handleChange} />
        <select name="category" value={input.category} id="category" defaultValue="" onChange={handleChange}>
          <option value="" disabled hidden>Category</option>
          {allCategories}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(addBook(book)),
});
export default connect(null, mapDispatchToProps)(BookForm);

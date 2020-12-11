import React from 'react';
import { categories, generateRandomNumber } from '../common';

const BookForm = () => {
  const allCategories = categories.map(category => (
    <option
      key={generateRandomNumber()}
      value={category}
    >
      {category}
    </option>
  ));
  return (
    <div>
      <form action="">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="Author" />
        <select name="category" id="category" placeholder="Category">
          {allCategories}
        </select>
      </form>
    </div>
  );
};

export default BookForm;

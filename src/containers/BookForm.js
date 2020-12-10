import React from 'react';
import { categories, generateRandomNumber } from '../common';

const BookForm = () => {
  const allCategories = categories.map(category => (
    <option
      key={generateRandomNumber}
      value={category}
    >
      {category}
    </option>
  ));
  return (
    <div>
      <form action="">
        <input type="text" name="title" />
        <select name="category" id="category">
          {allCategories}
        </select>
      </form>
    </div>
  );
};

export default BookForm;

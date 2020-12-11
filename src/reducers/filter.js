import { FILTER_BOOK } from '../actions/type';
import { defaultBooks } from '../common';

export default (state = defaultBooks, { type, payload }) => {
  switch (type) {
    case FILTER_BOOK:
      return state.filter(book => book.category === payload);
    default:
      return state;
  }
};

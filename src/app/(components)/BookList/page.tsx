// /components/BookList.js
import React from 'react';

const books = [
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author 1',
    description: 'Description 1',
  },
  // Add more book objects
];

const BookList = ({ type }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <button>Borrow</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;

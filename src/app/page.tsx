"use client"; // Add this line
import React, { useEffect, useState } from 'react';
import Header from '@/app/(components)/Header/page';
import Footer from '@/app/(components)/Footer/page';
import BookList from '@/app/(components)/BookList/page';
import { fetchBooks } from '@/app/api/hompage/route';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const booksData = await fetchBooks('9781787123427'); // Example ISBN
      setBooks(booksData);
    }
    getBooks();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Search the books available in Library</h2>
          <div className="flex mb-4">
            <input type="text" placeholder="Enter book name" className="flex-grow p-2 border rounded-l" />
            <button className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600">Search</button>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Books</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
              <div key={book.id} className="bg-white p-4 rounded shadow-md">
                <h4 className="text-lg font-bold">{book.volumeInfo.title}</h4>
                <p className="text-gray-700">{book.volumeInfo.authors?.join(', ')}</p>
                <p className="text-gray-600">{book.volumeInfo.description}</p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                  Borrow
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

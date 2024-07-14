"use client"; // Add this line
import React, { useEffect, useState } from 'react';
import Header from '@/app/(components)/Header/page';
import Footer from '@/app/(components)/Footer/page';
import { fetchBooks } from '@/app/api/hompage/route';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const booksData = await fetchBooks('9781787123427'); // Example ISBN
      setBooks(booksData.items || []); // Check if items exist in the response
    }
    getBooks();
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col text-white">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        <section className="mb-8">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Search the books available in Library</h2>
          <div className="flex mb-6 justify-center">
            <input type="text" placeholder="Enter book name" className="flex-grow p-3 border rounded-l shadow-md focus:outline-none" />
            <button className="bg-blue-600 text-white p-3 rounded-r hover:bg-blue-700 transition-all duration-200 shadow-md">
              Search
            </button>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Books</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.length > 0 ? (
              books.map((book) => (
                <div key={book.id} className="bg-white p-5 rounded shadow-lg hover:shadow-xl transition-shadow duration-200 text-black">
                  <h4 className="text-lg font-bold mb-2">{book.volumeInfo.title}</h4>
                  <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="mb-2 w-full h-auto" />
                  <p className="text-gray-700 mb-2">{book.volumeInfo.authors?.join(', ')}</p>
                  <p className="text-gray-600 mb-2">{book.volumeInfo.publishedDate}</p>
                  <p className="text-gray-600 mb-2">{book.volumeInfo.description}</p>
                  <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-2 block">More Info</a>
                  <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-200">
                    Borrow
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center w-full">No books found.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

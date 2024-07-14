// /pages/searchResults.js
import React from 'react';
import Footer from '@/app/(components)/Footer/page';
import BookList from '@/app/(components)/BookList/page';
import Header from '@/app/(components)/Header/page';

const SearchResultsPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Search Results</h2>
        <input type="text" placeholder="Enter book name" />
        <button>Search</button>
        <BookList type="searchResults" />
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;

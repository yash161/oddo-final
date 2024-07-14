// /pages/index.js
import React from 'react';
import Header from '@/app/(components)/Header/page';
import Footer from '@/app/(components)/Footer/page';
import BookList from '@/app/(components)/BookList/page';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Search the books available in Library</h2>
          <input type="text" placeholder="Enter book name" />
          <button>Search</button>
        </section>
        <section>
          <h3>New Arrivals</h3>
          <BookList type="new" />
        </section>
        <section>
          <h3>Trending</h3>
          <BookList type="trending" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

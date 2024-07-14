// /pages/userHome.js
import React from 'react';
import Footer from '@/app/(components)/Footer/page';
import BookList from '@/app/(components)/BookList/page';
import Header from '@/app/(components)/Header/page';

const UserHomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Search Books</h2>
          <input type="text" placeholder="Enter book name" />
          <button>Search</button>
        </section>
        <section>
          <h3>My Books</h3>
          <BookList type="borrowed" />
        </section>
        <section>
          <h3>User Profile</h3>
          <div>
            <p>Name: User Name</p>
            <p>Email: user@example.com</p>
            <p>Contact: 123-456-7890</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UserHomePage;

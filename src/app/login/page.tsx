// /pages/login.js
import React from 'react';
import Footer from '@/app/(components)/Footer/page';
import Header from '@/app/(components)/Header/page';
import BookList from '@/app/(components)/BookList/page';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Login to Public Library</h2>
        <form>
          <div>
            <label>Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;

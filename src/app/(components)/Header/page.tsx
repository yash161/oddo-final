// /components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>Public Library</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/userHome">User Home</Link>
      </nav>
    </header>
  );
};

export default Header;

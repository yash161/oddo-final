"use client"; // Add this line

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Public Library</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/userHome">User Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

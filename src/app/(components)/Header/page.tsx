"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#00695c', color: 'white', padding: '1rem' }}>
      <div style={{ container: 'mx-auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Public Library</h1>
        <nav>
          <Link href="/" passHref>
            <span style={{ margin: '0 1rem', textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Home</span>
          </Link>
          <Link href="/login" passHref>
            <span style={{ margin: '0 1rem', textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Login</span>
          </Link>
          <Link href="/userHome" passHref>
            <span style={{ margin: '0 1rem', textDecoration: 'none', color: 'white', cursor: 'pointer' }}>User Home</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

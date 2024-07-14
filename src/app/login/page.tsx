import React from 'react';
import Footer from '@/app/(components)/Footer/page';
import Header from '@/app/(components)/Header/page';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <main className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Login to Public Library</h2>
        <form className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label className="block font-bold mb-1">Username</label>
            <input type="text" name="username" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4 w-full">
            <label className="block font-bold mb-1">Password</label>
            <input type="password" name="password" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
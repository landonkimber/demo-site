import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Welcome to Page 2</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <p className="text-xl text-gray-800">
          This is the second page of our website.
        </p>
        <Link to="/" className="text-blue-500 underline">
          Go back to Home
        </Link>
      </main>
      <footer className="bg-green-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Business Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page2;

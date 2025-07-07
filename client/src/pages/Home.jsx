import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-6 testColor ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <p className="text-xl text-gray-800">
          This is a basic React component for the home page, styled with
          Tailwind CSS.
        </p>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">About Our Business</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            metus vel velit bibendum aliquam. Sed euismod lorem vel nunc
            ultricies, ac malesuada sapien malesuada.
          </p>
        </section>
        <Link to="/page2" className="text-blue-500 underline">
          Go to Page 2
        </Link>
      </main>
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Business Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

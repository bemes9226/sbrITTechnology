import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">My Website</h1>
      
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

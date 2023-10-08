import React from 'react';

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center text-white py-4 lg:py-8 my-4">
      <h1 className="font-semibold text-xl">Hao Duong</h1>
      <ul className="flex gap-2 lg:gap-8 z-100">
        <li>Photography</li>
        <li>Blog</li>
      </ul>
    </header>
  );
}

import React from 'react';

export default function Header() {
  return (
    <header className="w-full relative">
      <ul className="fixed top-[1rem] left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 text-white">
        <li>Photography</li>
        <li>Blog</li>
      </ul>
    </header>
  );
}

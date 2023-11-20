import React from "react";

export default function NavBar() {
  return (
    <nav
      className="mx-auto fixed top-4 left-1/2 -translate-x-1/2 z-20 mt-auto text-3xl w-9/12 font-semibold bg-gray-50/10
     text-gray-50 py-3 text-center backdrop-blur-sm rounded-xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1)]"
    >
      <a href="/">QUIZ QUEST</a>
    </nav>
  );
}

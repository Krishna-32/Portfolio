import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full flex justify-between items-center px-6 py-4 text-white font-gilroy font-bold">
      <span className="cursor-pointer">Planets</span>

      <div className="flex gap-10">
        <span className="cursor-pointer">Home</span>

        <span className="cursor-pointer">About</span>

        <span className="cursor-pointer">Contact</span>
      </div>
    </div>
  );
}

export default Navbar;

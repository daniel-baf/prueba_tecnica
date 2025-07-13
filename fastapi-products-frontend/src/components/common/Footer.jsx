import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 fixed left-0 bottom-0 w-full">
      <span>
        &copy; {new Date().getFullYear()} FastAPI Products. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;

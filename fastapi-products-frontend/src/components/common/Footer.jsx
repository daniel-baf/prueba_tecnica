import React from "react";

/**
 * Footer component that displays a fixed footer at the bottom of the page.
 * Shows the current year and a copyright notice for FastAPI Products.
 *
 * @component
 * @returns {JSX.Element} The rendered footer element.
 */
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

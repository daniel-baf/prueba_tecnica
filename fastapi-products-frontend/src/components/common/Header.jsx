import React from 'react';

/**
 * Header component that displays the application title and creator's name.
 *
 * @component
 * @returns {JSX.Element} The rendered header section with title and author.
 */
const Header = () => (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white text-lg">
        <div>
            <strong>FastAPI Products</strong>
        </div>
        <div>
            Creado por Daniel Bautista
        </div>
    </header>
);

export default Header;

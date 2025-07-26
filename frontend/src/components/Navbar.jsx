import {useState, useEffect} from 'react';

function Navbar() {
    return (
        <>
            <header className="fixed bg-white py-2 w-full">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold text-green-600">Mindfulnotes</h3>
                <nav className="space-x-6 hidden md:flex">
                    <></>
                </nav>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Menu
                </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;
export default function Navbar() {
    return (
        <>
            <header className="top-0 sticky bg-white py-2 w-full shadow-sm shadow-green-100 hover:shadow-green-300">
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
};
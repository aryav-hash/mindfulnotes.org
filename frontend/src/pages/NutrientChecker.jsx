import logo from "../assets/logo.png"
import Papa from 'papaparse'
import { useEffect, useState } from 'react'

function NutrientChecker() {
    const [options, setOptions] = useState([])
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        Papa.parse('/fooditemlistgm.csv', {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
            setOptions(result.data)
        },
        })
    }, [])

    const filtered = (options || []).filter(
    (item) =>
        item.food_name &&
        item.food_name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className="font-sans text-gray-800 relative">
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

                <center><section className="flex flex-col justify-around items-center text-center py-16 max-w-6xl bg-yellow-50">
                            <img src={logo} alt="Mindful Notes logo" className="h-20 w-auto" />
                            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
                                Pay full attention to your food. We help you check and compare the nutrition in what you eat — with Nutrient Checker
                            </p>
                        </section></center>

                <div className="max-w-md mx-auto mt-10">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border rounded shadow"
                />
                <ul className="border rounded shadow mt-2 max-h-48 overflow-y-auto">
                    {filtered.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => setSelected(item)}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                        {item.food_name}
                    </li>
                    ))}
                </ul>
                {selected && (
                    <div className="mt-4 bg-gray-100 p-4 rounded">
                    <h3 className="text-lg font-semibold text-green-700 mb-2">
                        Selected: {selected.food_name}
                    </h3>
                    <ul className="text-gray-800 text-sm space-y-1">
                        {Object.entries(selected).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
            </div>

            <footer className="bg-gray-800 text-white text-center py-6">
                <p className="mb-1 text-sm">Nutrients for common recipes, with values presented per 100g. The data is referenced from Indian Nutrient Databank (INDB).</p>
                <p className="text-sm">www.mindfulnotes.org | mindnotes6@gmail.com</p>
            </footer>

            </div>
        </>
    );
}

export default NutrientChecker;
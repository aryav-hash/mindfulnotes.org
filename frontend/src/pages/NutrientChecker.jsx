import logo from "../assets/logo.png"
import Papa from 'papaparse'
import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend,} from "chart.js";
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

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

    const filtered = (options).filter(
    (item) =>
        item.food_name &&
        item.food_name.toLowerCase().includes(search.toLowerCase())
    )

    const handleSelect = (item) => {
        setSelected(item);
        setSearch(''); 
    };

    return (
        <>
            <div className="font-sans text-gray-800 relative">
                <header className="fixed bg-white py-2 w-full">
                    <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                    <Link to="/" className="text-xl md:text-2xl font-bold text-green-600">Mindfulnotes</Link>
                    <nav className="space-x-6 hidden md:flex">
                        <></>
                    </nav>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Menu
                    </button>
                    </div>
                </header>

                <center>
                    <section className="flex flex-col justify-around items-center text-center py-16 max-w-6xl bg-yellow-50">
                        <img src={logo} alt="Mindful Notes logo" className="h-20 w-auto" />
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
                            Pay full attention to your food. We help you check and compare the nutrition in what you eat — with Nutrient Checker
                        </p>
                    </section>
                </center>

                <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto mt-10 mb-20 min-h-[200px] transition-all duration-300">
                    <div className="w-full md:w-1/3">
                        <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-2 border rounded shadow"
                        />

                        {search && filtered.length > 0 && (
                        <ul className="border rounded shadow mt-2 max-h-48 overflow-y-auto">
                            {filtered.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(item)}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            >
                                {item.food_name}
                            </li>
                            ))}
                        </ul>
                        )}

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

                    <div className="w-full md:w-2/3 flex items-center justify-center">
                        {selected && (
                        <div className="w-full h-[400px]">
                            <h4 className="text-md font-semibold mb-2">Nutrient Chart</h4>
                            <Bar
                            data={{
                                labels: Object.keys(selected).filter((key) =>
                                ['energy_kcal', 'carb_g', 'protein_g', 'fat_g', 'freesugar_g', 'fibre_g'].includes(key.toLowerCase())
                                ),
                                datasets: [
                                {
                                    label: `${selected.food_name} (per 100g)`,
                                    backgroundColor: [
                                    '#4285F4',
                                    '#34A853',
                                    '#FBBC04',
                                    '#EA4335',
                                    '#E37400',
                                    '#202124',
                                    ],
                                    data: Object.entries(selected)
                                    .filter(([key]) =>
                                        ['energy_kcal', 'carb_g', 'protein_g', 'fat_g', 'freesugar_g', 'fibre_g'].includes(key.toLowerCase())
                                    )
                                    .map(([, value]) => parseFloat(value)),
                                },
                                ],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                y: {
                                    beginAtZero: true,
                                },
                                },
                            }}
                            height={350}
                            />
                        </div>
                        )}
                    </div>
                </div>
            
            <div className="flex justify-center">
                <p className="mb-1 text-sm px-5 py-5 w-6xl text-center"><span className="font-bold">Disclaimer: </span><i>The data displayed above is indicative in nature, with values presented per 100g. The recipes may vary based on individual preferences and availability of ingredients. The data is referenced from Indian Nutrient Databank (INDB).</i></p>
            </div>

            <Footer />
            </div>
        </>
    );
}

export default NutrientChecker;
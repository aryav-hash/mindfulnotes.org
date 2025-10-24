import logo from "../assets/logo.png"
import Papa from 'papaparse'
import Footer from "../components/Footer"
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react'
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend,} from "chart.js";
import {Bar} from 'react-chartjs-2';


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function NutrientChecker() {
    const [options, setOptions] = useState([])
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        Papa.parse('/fooditemlistgm.csv', {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
            if (result.data && result.data.length > 0) {
                setOptions(result.data)
                setLoading(false)
            } else {
                setError('No data found in CSV file')
                setLoading(false)
            }
        },
        error: (err) => {
            setError('Failed to load food data: ' + err.message)
            setLoading(false)
        }
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
                <Navbar />

                <center>
                    <section className="mt-10 flex flex-col justify-around items-center text-center py-16 max-w-6xl bg-yellow-50">
                        <img src={logo} alt="Mindful Notes logo" className="h-20 w-auto" />
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
                            Pay full attention to your food. We help you check and compare the nutrition in what you eat — with Nutrient Checker
                        </p>
                    </section>
                </center>

                <div className="flex flex-col w-full mx-auto mt-10 mb-20 min-h-[200px] transition-all duration-300">
                    <div className="w-full flex flex-col items-center mb-10">
                        <input
                        type="text"
                        placeholder="Search for food items..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="max-w-xs px-5 py-1 border rounded shadow focus:outline-none focus:ring-2 focus:ring-green-500"
                        disabled={loading}
                        />

                        {loading && <p className="mt-2 text-gray-500">Loading food data...</p>}
                        {error && <p className="mt-2 text-red-500">{error}</p>}

                        {search && filtered.length > 0 && (
                            <ul className="border rounded shadow mt-2 max-h-48 overflow-y-auto w-full max-w-md">
                                {filtered.map((item) => (
                                <li
                                    key={item.food_name || item.id}
                                    onClick={() => handleSelect(item)}
                                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                >
                                    {item.food_name}
                                </li>
                                ))}
                            </ul>
                        )}

                        {search && filtered.length === 0 && !loading && (
                            <p className="mt-2 text-gray-500">"No results found for "{search}"</p>
                        )}
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 md:gap-20 max-w-6xl mx-auto px-4">
                        <div className="w-full md:w-1/3 flex items-center justify-center">
                            {selected && (
                            <div className="mt-4 bg-gray-100 p-4 rounded w-full">
                                <h3 className="text-lg font-semibold text-green-700 mb-2">
                                Selected: {selected.food_name}
                                </h3>
                                <ul className="text-gray-800 text-sm space-y-1">
                                {Object.entries(selected).map(([key, value]) => (
                                    <li key={key}>
                                    <strong className="capitalize">{key.replace(/_/g, ' ')}:</strong> {value}
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
                                    ).map(label => label.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())),
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
                                        .map(([, value]) => parseFloat(value) || 0),
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
                                />
                            </div>
                            )}
                        </div>
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
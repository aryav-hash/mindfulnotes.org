import Navbar from "../components/Navbar";
import { useState } from 'react';
import '../index.css';

export default function RecordParameters() {
    const [sleep, setSleep] = useState(7);
    const [choice, setChoice] = useState('');
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        if (!name || !price) return ;
        name.replace(/\s+/g, " ").trim;
        const checkNum = name.replace(" ", '');
        if (!isNaN(parseInt(checkNum))) {
            console.log(parseInt(checkNum));
            alert("Please input a valid item name");
            setName("");
            setPrice("");
            return ;
        }
        price.trim();
        setItems([...items, {name, price}]);
        setName("");
        setPrice("");
    };
    
    const del = (e, index) => {
        e.preventDefault();
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <>
            <Navbar />
            {/* Form section */}
            <section className="my-8 md:my-12 lg:my-15 flex flex-col items-center h-auto m-auto py-6 px-6 sm:py-10 max-w-xs smm:max-w-md 
            md:max-w-2xl lg:max-w-3xl border-3 border-green-400 rounded-3xl">
                <h1 className="max-w-3xs pb-5 text-lg sm:text-xl md:text-3xl
                smm:max-w-3xs md:max-w-md text-center underline decoration-solid underline-offset-5">Record your Well-being 
                Parameters</h1>

                <form className="space-y-2 smm:space-y-3 sm:space-y-4 w-full max-w-xl">
                    
                    {/* Sleep input */}
                    <div className="grid grid-col-1">
                        <p className="text-sm smm:text-md md:text-xl font-bold">1. SLEEP</p>
                        <div className="mt-2 ml-5 w-full">
                            <p htmlFor="sleep" className="text-xs smm:text-md md:text-lg text-wrap font-medium mb-2 
                            max-w-3xs smm:max-w-xs md:max-w-lg">~ How would you describe waking up in the morning ?</p>
                            <div className="flex items-center mb-1">
                                <input type="radio" name="sleep-emotion" defaultChecked className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="refreshed" className="text-xs smm:text-md md:text-lg">Refreshed</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="sleep-emotion" className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="grumpy" className="text-xs smm:text-md md:text-lg">Grumpy / Sleepy</label>
                            </div>
                            <p className="my-2 text-xs smm:text-md md:text-lg text-wrap font-medium mb-2 
                            max-w-3xs smm:max-w-xs md:max-w-lg">~ How many hours of sleep did you get ?</p>
                            <div className="relative w-full max-w-3xs smm:max-w-sm md:max-w-xl">
                                <input type="range" value={sleep} onChange={e => setSleep(Number(e.target.value))} min="0" max="12" className="w-full max-w-3xs smm:max-w-sm md:max-w-xl 
                                h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"/>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-0 -bottom-3 md:-bottom-6">0</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-1/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">1</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-2/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">2</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-3/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">3</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-4/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">4</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-5/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">5</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-6/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">6</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-7/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">7</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-8/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">8</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-9/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">9</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-10/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">10</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute start-11/12 -translate-x-1/2 rtl:translate-x-1/2 -bottom-3 md:-bottom-6">11</span>
                                <span className="text-[8px] smm:text-[12px] md:text-lg  text-neutral-800 absolute end-0 -bottom-3 md:-bottom-6">12</span>
                            </div>
                        </div>
                    </div>

                    {/* Mood during the entire day */}
                    <div className="grid grid-col-1">
                        <p className="pt-8 text-sm smm:text-md md:text-xl font-bold">2. MOOD</p>
                        <div className="mt-2 ml-5 w-full">
                            <p htmlFor="sleep" className="text-xs smm:text-md md:text-lg text-wrap font-medium mb-1 
                            max-w-3xs smm:max-w-xs md:max-w-lg">~ How would you describe your mood throughout the day ?</p>
                            <label className="flex items-center mb-1">
                                <input type="radio" name="mood" className="mr-2 hidden peer" defaultChecked/>
                                <span class="before:content-['😄'] peer-checked:before:content-['✅'] text-xs smm:text-md md:text-lg before:mr-1">Happy</span>
                            </label>
                            <label className="flex items-center mb-1">
                                <input type="radio" name="mood" className="mr-2 hidden peer" />
                                <span class="before:content-['😢'] peer-checked:before:content-['✅'] text-xs smm:text-md md:text-lg before:mr-1">Sad</span>
                            </label>
                            <label className="flex items-center mb-1">
                                <input type="radio" name="mood" className="mr-2 hidden peer" />
                                <span class="before:content-['😡'] peer-checked:before:content-['✅'] text-xs smm:text-md md:text-lg before:mr-1">Angry</span>
                            </label>
                            <label className="flex items-center mb-1">
                                <input type="radio" name="mood" className="mr-2 hidden peer" />
                                <span class="before:content-['😥'] peer-checked:before:content-['✅'] text-xs smm:text-md md:text-lg before:mr-1">Stressed / Anxious</span>
                            </label>
                            <p className="py-2 text-xs smm:text-md md:text-lg text-wrap font-medium 
                            max-w-3xs smm:max-w-xs md:max-w-lg">~ Reasons:</p>
                            <textArea placeholder="Place your reasons here ..." name="mood-reasons" rows="2" className="p-2 text-xs smm:text-md md:text-lg border-2 rounded-lg border-blue-500 focus:outline-none focus:border-2 focus:border-green-500 h-auto w-full max-w-[230px] smm:max-w-[300px] md:max-w-lg"/>
                        </div>
                    </div>
                    
                    {/* Social */}
                    <div className="grid grid-col-1">
                        <p className="pt-3 text-sm smm:text-md md:text-xl font-bold">3. SOCIAL LIFE</p>
                        <div className="mt-2 ml-5 w-full">
                            <p htmlFor="sleep" className="text-xs smm:text-md md:text-lg text-wrap font-medium mb-2 
                            max-w-3xs smm:max-w-xs md:max-w-lg">~ Did you have any meaningful interactions with someone today ?</p>
                            <div className="flex items-center mb-1">
                                <input type="radio" name="social-life" defaultChecked className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="Yes" className="text-xs smm:text-md md:text-lg">Yes</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="social-life" className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="No" className="text-xs smm:text-md md:text-lg">No</label>
                            </div>
                        </div>
                    </div>

                    {/* habits */}
                    <div className="grid grid-col-1">
                        <p className="pt-3 text-sm smm:text-md md:text-xl font-bold">4. HABITS</p>
                        <div className="mt-2 ml-5 w-full">
                            <p htmlFor="sleep" className="text-xs smm:text-md md:text-lg text-wrap font-medium mb-2 
                            max-w-3xs smm:max-w-xs md:max-w-lg">~ Tick some of the following habits which you followed today: </p>
                            <div className="flex items-center mb-1">
                                <input type="checkbox" name="habits" className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="excercise" className="text-xs smm:text-md md:text-lg">Physical Activity / Exercise</label>
                            </div>
                            <div className="flex items-center mb-1">
                                <input type="checkbox" name="habits" className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="meals" className="text-xs smm:text-md md:text-lg">Healthy Meals</label>
                            </div>
                            <div className="flex items-center mb-1">
                                <input type="checkbox" name="habits" className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="meditation" className="text-xs smm:text-md md:text-lg">Meditation / Relaxation</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="habits" className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="learning" className="text-xs smm:text-md md:text-lg">Reading / Learning / Creative activity</label>
                            </div>
                        </div>
                    </div>

                    {/* financial data */}
                    <div className="grid grid-col-1">
                        <p className="pt-3 text-sm smm:text-md md:text-xl font-bold">5. FINANCES</p>
                        <div className="mt-2 ml-5 w-full">
                            <p htmlFor="finance-question" className="text-xs smm:text-md md:text-lg text-wrap font-medium mb-1 
                            max-w-3xs smm:max-w-xs md:max-w-lg">~ Did you make any impulsive purchases ?</p>
                            <div className="flex items-center mb-1">
                                <input type="radio" value="yes" name="response" checked={choice === 'yes'} 
                                onChange={(e) => {setChoice(e.target.value)}}
                                className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="yes" className="text-xs smm:text-md md:text-lg">Yes</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" value="no" name="response" defaultChecked checked={choice === 'no'} 
                                onChange={(e) => {setChoice(e.target.value)}}
                                className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
                                <label htmlFor="no" className="text-xs smm:text-md md:text-lg">No</label>
                            </div>
                        </div>

                        {/* conditional section */}
                        {choice === "yes" && (
                            <div className="mt-2 ml-5">
                                <p htmlFor="finance-question" className="text-xs smm:text-md md:text-lg text-wrap font-medium mb-1 
                            max-w-3xs smm:max-w-xs md:max-w-lg">Please provide some details:-</p>
                                <div className="flex flex-col gap-2">
                                    <input type="text" placeholder="Item name" maxLength="35" value={name} onChange={(e) => setName(e.target.value)}
                                    className="text-xs smm:text-md md:text-lg border px-2 py-1 w-full max-w-[200px] smm:max-w-[300px] md:max-w-[400px] focus:outline-none focus:border-2 focus:border-green-500"/>
                                    <input type="number" placeholder="Price" min="0" max="999999" value={price} onChange={(e) => setPrice(e.target.value)} 
                                    className="text-xs smm:text-md md:text-lg border px-2 py-1 w-full max-w-[100px] smm:max-w-[150px] md:max-w-[180px] focus:outline-none focus:border-2 focus:border-green-500"/>
                                    <button type="button" onClick={addItem} className="text-xs smm:text-md md:text-lg bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full max-w-[50px] smm:max-w-[65px] md:max-w-[80px]">
                                        Add
                                    </button>
                                </div>

                                {/* display items */}
                                <div className="mt-6 grid grid-cols-2 smm:grid-cols-3 w-full max-w-3xs smm:max-w-sm md:max-w-xl gap-4">
                                    {items.map((item, index) => (
                                        <div key={index} className="border rounded p-3 shadow-sm flex flex-col">
                                            <span className="font-semibold text-xs smm:text-md md:text-lg">{item.name}</span>
                                            <span className="text-xs smm:text-md md:text-lg text-gray-600">Rs {item.price}</span><br />
                                            <button type="button" onClick={(e) => del(e, index)} className="text-xs smm:text-md md:text-lg text-red-500 hover:text-red-700">Delete</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </section>
        </>
    );
};
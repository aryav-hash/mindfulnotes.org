import {useState, useEffect} from 'react';

export default function QuoteSection() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const api = "http://localhost:5000/api/quote";
        async function getApi(url) {
            try {
                const res = await fetch(url);
                const data = await res.json();
                if (data && data.length > 0) {
                    setQuote({ q: data[0].q, a: data[0].a });
                }
                else {
                    setQuote(null);
                }
            }
            catch (error) {
                setQuote(null);
            }
            finally {
                setLoading(false);
            }
        }
        getApi(api);
    }, []);

    return (
        <section className="bg-yellow-50 px-4 py-5 text-center rounded shadow max-w-6xl mx-auto">
        {loading ? (
            <p className="text-gray-500">Loading...</p>
        ) : quote ? (
            <blockquote className="italic text-lg text-gray-800 mb-2 font-medium">“{quote.q}”</blockquote>
        ) : (
            <p className="text-red-500"> Could not load quote.</p>
        )}
        {quote && <p className="text-gray-600 font-medium">— {quote.a}</p>}
        </section>
    );

}

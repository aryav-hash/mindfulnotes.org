import {useState, useEffect} from 'react';

function QuoteSection() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch(
        'https://api.allorigins.win/get?url=' +
        encodeURIComponent('https://zenquotes.io/api/random')
    )
        .then(res => res.json())
        .then(data => {
        const parsed = JSON.parse(data.contents);
        setQuote(parsed[0]);
        setLoading(false);
        })
        .catch((err) => {
        console.error('Failed to fetch quote:', err);
        setLoading(false);
        });
    }, []);

    return (
        <section className="bg-yellow-50 px-4 py-5 text-center rounded shadow max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Quote of the Day !</h2>
        {loading ? (
            <p className="text-gray-500">Loading...</p>
        ) : quote ? (
            <blockquote className="italic text-lg text-gray-800 mb-2">“{quote.q}”</blockquote>
        ) : (
            <p className="text-red-500">Could not load quote.</p>
        )}
        {quote && <p className="text-gray-600">— {quote.a}</p>}
        </section>
    );

}

export default QuoteSection;
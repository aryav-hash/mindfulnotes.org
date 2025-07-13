import logo from "../assets/logo.png"

function Home() {
    const cardData = [
        {
            image: '/images/meditation.jpg',
            title: 'Meditation helps our body and mind',
            desc: `Meditation is a gentle practice that brings your focus inward, helping you relax, reduce stress, and find balance. It is a powerful tool for both physical well-being and mental clarity, offering numerous benefits to your health.
                    Start with just a few minutes: Begin with 5 to 10 minutes of meditation each day and gradually increase the time as you feel comfortable.
                    Find a quiet space: Choose a peaceful, quiet space where you can sit comfortably without distractions.
                    Focus on your breath: Close your eyes and pay attention to your breathing—inhale slowly and deeply, then exhale gently. Let your thoughts come and go without getting attached to them.
                    Use guided meditations: If you are new to meditation, try using apps or videos with guided sessions to help you get started.
                    Practice regularly: Meditation is most effective when practiced regularly, so try to set aside time each day to meditate`,
        },
        {
            image: '/images/sleep.jpg',
            title: 'Sleep helps our body and mind',
            desc: 'Sleep supports mental clarity, physical recovery, and emotional balance.',
        },
        {
            image: '/images/productivity.jpg',
            title: 'Daily productivity improves well-being',
            desc: 'Accomplishing daily goals gives us purpose and control.',
        },
        {
            image: '/images/stress.jpg',
            title: 'Reducing stress helps mental health',
            desc: 'Lowering stress helps us feel more at ease and mentally clear.',
        },
        {
            image: '/images/hydration.jpg',
            title: 'Staying hydrated helps body and mind',
            desc: 'Water is vital for energy, focus, skin, and overall mental well-being.',
        },
        {
            image: '/images/eating.jpg',
            title: 'Mindful eating improves well-being',
            desc: 'Paying attention to what and how you eat can improve your health.',
        }
    ]
    
    return (
        <>
            <div className="font-sans text-gray-800">
            {/* Navbar */}
            <header className="bg-white shadow-md py-2 ">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-blue-700">MINDFUL NOTES</h2>
                <nav className="space-x-6 hidden md:flex">
                    <></>
                </nav>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Menu
                </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col justify-around items-center text-center py-16 bg-red-50">
                <img src={logo} alt="Mindful Notes logo" className="h-20 w-auto" />
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
                Mindful Notes is a web application that records our well-being and various parameters and provides personalized insights. It generates a personalized well-being indicator day-to-day, helping you better your mental and physical well-being.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Login
                </button>
            </section>

            {/* Info Cards Grid */}
            <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {cardData.map((item, index) => (
                <div
                    key={index}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                    <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                    />
                    <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{item.desc}</p>
                    <button className="text-blue-600 font-medium hover:underline">
                        View More
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-6">
                <p className="mb-1">Stay Connected!</p>
                <p className="text-sm">www.mindfulnotes.org | mindnotes6@gmail.com</p>
            </footer>
            </div>
        </>
    )
}

export default Home
import logo from "../assets/logo.png"

function Home() {
    const cardData = [
        {
            image: '/images/mindfulness.jpg',
            title: 'Mindfulness',
            desc: 'Mindfulness is the practice of being fully present in the current moment, with awareness and without judgment.',
        },
        {
            image: '/images/meditation.jpg',
            title: 'Meditation',
            desc: 'Meditation is a formal practice where you intentionally focus your attention, often as a way to train the mind.',
        },
        {
            image: '/images/productivity.jpg',
            title: 'Focus and Productivity',
            desc: `Focus and productivity are key aspects of mental and physical well-being, especially if you're managing work, study, or personal goals.`,
        },
        {
            image: '/images/sleep.jpg',
            title: 'Sleep',
            desc: `Sleep is one of the most fundamental pillars of physical and mental well-being. It's not just about getting enough rest—sleep quality, consistency, and timing directly affect your energy, mood, focus, immunity, and even long-term health.`,
        },
        {
            image: '/images/eating.jpg',
            title: 'Mindful Eats',
            desc: `Mindful eating is the practice of fully engaging your senses and awareness while eating, without judgment or distraction.`,
        },
        {
            image: '/images/stress.jpg',
            title: 'Stress',
            desc: 'Stress is your body’s natural response to demands or threats, whether physical, emotional, or psychological. It’s not always negative—some stress is healthy (called eustress) and helps with motivation and focus.',
        },
        {
            image: '/images/screen.jpg',
            title: 'Screen time and digital overload',
            desc: "In today’s hyperconnected world, screen time and digital overload have become major factors influencing our mental, physical, and emotional well-being. While technology offers convenience and connection, excessive use can disrupt nearly every area of health.",
        },
        {
            image: '/images/anger.jpg',
            title: 'Anger and well-being',
            desc: 'Anger is a normal human emotion, but when it becomes frequent, intense, or uncontrolled, it can negatively affect your mental, emotional, and physical well-being.',
        },
        {
            image: '/images/minimalism.jpg',
            title: 'Minimalism',
            desc: 'Minimalism and well-being are deeply connected, often in ways people don’t immediately realize. On the surface, minimalism is about reducing physical clutter and living with less, but it goes beyond just owning fewer things. It’s a lifestyle that emphasizes focus, intentionality, and cultivating a life that is more meaningful and less overwhelmed by distractions.'
        }
    ]
    
    const menuData = [
        {
            title: "What we offer",
            desc: "Our well-being tracker combines smart technology with proven wellness techniques to help you feel better, every day. By tracking physical health, mental clarity, sleep, stress, screen time, and more, we give you a full picture of your well-being. With easy tools, gentle reminders, and personalized insights, the app helps you build healthier habits and notice what works for you."
        },
        {
            title: "Who we serve",
            desc: "Our well-being tracker is built for individuals and organizations alike—designed to support anyone looking to live and work with greater balance, awareness, and health. We serve students, professionals, parents, and retirees who want to track and improve their daily wellness. We also partner with businesses, employers, wellness coaches, gyms, clinics, schools, and mental health professionals who are committed to creating healthier environments for their people."
        },
        {
            title: "About us",
            desc: "We are a team dedicated to helping people live healthier, more balanced lives—one day at a time. Our well-being tracker is designed to make daily self-care simple and meaningful, blending science-backed practices with easy-to-use tools. Whether you're tracking your mood, managing stress, or building new habits, we're here to support your journey with clarity, compassion, and purpose."
        },
        /*{
            title: "Support our mission",
            desc: "If our work resonates with you, we invite you to support our mission to make well-being accessible for all. Your contribution—big or small—helps us continue building tools that empower individuals, support communities, and promote healthier lifestyles across all walks of life. With your help, we can reach more people, enhance our features, and create lasting impact."
        },*/
        {
            title: "Contact us",
            desc: "We’d love to hear from you! Whether you have a question, feedback, partnership inquiry, or just want to say hello—our team is here to help. Reach out to us anytime at mindnotes6@gmail.com"
        }
    ]

    return (
        <>
            <div className="font-sans text-gray-800 relative">
            {/* Navbar */}
            <header className="fixed bg-white py-2 w-full">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-600">MINDFULNOTES</h3>
                <nav className="space-x-6 hidden md:flex">
                    <></>
                </nav>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Menu
                </button>
                </div>
            </header>

            {/* Hero Section */}
            <center><section className="flex flex-col justify-around items-center text-center py-16 max-w-6xl bg-red-50">
                <img src={logo} alt="Mindful Notes logo" className="h-20 w-auto" />
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
                Welcome to Mindfulnotes, the well-being tracker that anyone can use.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Login
                </button>
            </section></center>

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
                    </div>
                </div>
                ))}
            </div>
            </section>
            
            <section className="pb-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
                {menuData.map((item, index) => (
                <div
                    key={index}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                    <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{item.desc}</p>
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
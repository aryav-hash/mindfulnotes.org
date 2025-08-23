import Navbar from "../components/Navbar";
import '../App.css';

export default function RecordParameters() {
    return (
        <>
            <Navbar />
            {/* Header section */}

            {/* Form section */}
            <section className="my-8 sm:my-10 md:my-12 lg:my-15 flex flex-col items-center h-auto m-auto py-6 px-6 sm:py-10 sm:px-10 max-w-xs smm:max-w-md 
            md:max-w-2xl lg:max-w-3xl border-3 border-green-400 rounded-3xl">
                <h1 className="max-w-3xs pb-5 sm:pb-8 text-lg sm:text-2xl md:text-3xl 
                smm:max-w-3xs md:max-w-md text-center underline decoration-solid underline-offset-5">Record your Well-being 
                Parameters</h1>

                <form className="space-y-2 smm:space-y-3 sm:space-y-4">
                    <p>a</p>
                    <p>b</p>
                    <p>c</p>
                    <p>d</p>
                    <p>e</p>
                    <p>f</p>
                    <p>g</p>
                    <p>h</p>
                </form>

            </section>
        </>
    );
};
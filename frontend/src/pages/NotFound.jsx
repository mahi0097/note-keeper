function NotFound() {
    return (
        // Full screen container with the app's signature background and centering
        <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-gray-800 p-6">
            <div className="text-center p-10 bg-white rounded-2xl shadow-2xl border-b-8 border-red-500 transform transition duration-500 hover:scale-[1.01]">
                
                {/* Large, distinctive error code */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-red-500 mb-4 tracking-wider">
                    404
                </h1>
                
                {/* Clear message with a slight retro look */}
                <p className="text-3xl font-semibold mb-6">
                    Page Not Found
                </p>

                {/* Helpful, branded instruction */}
                <p className="text-lg text-gray-600 mb-8 max-w-sm mx-auto">
                    Looks like your memo got lost in transit! The page you're seeking doesn't exist.
                </p>

                {/* Call to action button to return home */}
                <a 
                    href="/" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 transform hover:translate-y-[-2px] active:scale-[0.98]"
                >
                    Go Back to Memo Wall
                </a>
            </div>
            {/* Optional: Add a playful error graphic */}
            <p className="mt-8 text-sm text-gray-500">
                (Error Code: LOST-MEMO-404)
            </p>
        </div>
    )
}

export default NotFound
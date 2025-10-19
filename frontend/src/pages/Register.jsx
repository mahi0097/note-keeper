import Form from "../components/Form"

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl w-full space-y-8 p-12 bg-white rounded-3xl shadow-xl border-t-8 border-indigo-600 transition duration-500 ease-in-out transform hover:scale-[1.01]">
                <div className="text-center">
                    <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-md text-gray-600">
                        Join the note-taking community today! 🚀
                    </p>
                </div>
                {/* Pass custom classes to the Form component */}
                <Form 
                    route="/api/user/register/" 
                    method="register" 
                    className="space-y-8"
                />
            </div>
        </div>
    )
}

export default Register
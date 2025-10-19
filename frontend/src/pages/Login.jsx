import Form from "../components/Form"

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl transition duration-500 hover:shadow-3xl">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Access your private notes securely.
                    </p>
                </div>
                {/* Pass custom classes to the Form component */}
                <Form 
                    route="/api/token/" 
                    method="login" 
                    className="space-y-6"
                />
            </div>
        </div>
    )
}

export default Login
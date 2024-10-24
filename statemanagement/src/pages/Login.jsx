import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <p className="text-3xl text-center font-bold text-orange-500 mb-8">
            LOGIN
          </p>
          <form action="#" className="space-y-6">
            <div className="input-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                className="w-full h-12 border border-gray-300 rounded-lg mt-1 px-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
                className="w-full h-12 border border-gray-300 rounded-lg mt-1 px-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full h-12 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                LOGIN
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <a href="/register" className="text-orange-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

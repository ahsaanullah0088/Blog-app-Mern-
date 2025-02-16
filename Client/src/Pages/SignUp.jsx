import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormdata] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedData = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    if (!trimmedData.username || !trimmedData.email || !trimmedData.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trimmedData),
      });

      if (!res.ok) {
        throw new Error('User Already Exists');
      }

      const data = await res.json();

      if (data.success === false) {
        setErrorMessage(data.message);
      } else {
        setErrorMessage('');
        window.location.href = '/sign-in';
      }
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl text-black">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Ahsaan 
            </span>
            Ullah
          </Link>
          <p className="text-sm mt-5 text-gray-600 dark:text-gray-300">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>

        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-gray-700 dark:text-gray-300 font-medium">
                Your username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@company.com"
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-medium">
                Your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
          {errorMessage && <p className="text-red-500 p-2 border mt-2">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

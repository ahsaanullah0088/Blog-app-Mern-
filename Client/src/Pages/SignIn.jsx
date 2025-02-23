import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../redux/user/userSlice.js';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure(
        "All fields are required"
      )); 
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));        
        return;
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6'>
        <Link to='/' className='text-3xl font-bold text-center block mb-6'>
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-2 py-1 rounded-lg'>
            Ahsaan
          </span>{' '}
          Ullah
        </Link>
        <p className='text-sm text-gray-600 text-center mb-4'>
          This is a demo project. You can sign in with your email and password or with Google.
        </p>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Your email</label>
            <input
              type='email'
              id='email'
              placeholder='name@company.com'
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Your password</label>
            <input
              type='password'
              id='password'
              placeholder='**********'
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold text-center hover:opacity-90 disabled:opacity-70'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        <div className='text-sm text-center mt-4'>
          <span>Don't have an account?</span>
          <Link to='/sign-up' className='text-blue-500 ml-1'>Sign Up</Link>
        </div>
        {errorMessage && (
          <div className='mt-4 bg-red-100 text-red-700 p-3 rounded-lg text-center'>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

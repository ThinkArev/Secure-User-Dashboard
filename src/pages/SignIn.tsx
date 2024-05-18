import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction} from '../store/userSlice';
import { login as loginUser } from '../services/api';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      setError("");
    }
  }, [loading])

  // submission handler
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      dispatch(loginAction(data.token));
      navigate('/');  // Redirect to dashboard
    } catch (error: any) {
      console.error(error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  // JSX element
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl mb-4">Sign In</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" >

        {loading ? (
          <div className="flex justify-center items-center">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0c-5.523 0-10 4.477-10 10h4zm2 5.291A7.97 7.97 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </div>
        ) : (
          'Sign In'
        )}</button>

      <p>
        To create an account, go to the <Link to="/sign-up" className="text-blue-500 underline">signup</Link> page.
      </p>
    </form>
  );
};

export default SignIn;

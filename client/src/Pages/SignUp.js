import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../Components/OAuth';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// CSS for the spinner
const spinnerStyle = {
  border: '2px solid rgba(0, 0, 0, 0.1)',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  borderTopColor: '#444444',
  animation: 'spin 1s ease-in-out infinite',
};

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);  // Modal visibility state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Kindly fill out all fields.');
      setShowModal(true);  // Show the modal when there's an error
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setErrorMessage(data.message);
        setShowModal(true);  // Show the modal when there's an error
        return;
      }
      setLoading(false);

      if (res.ok) {
        navigate('/signin');
      }

    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      setShowModal(true);  // Show the modal when there's an error
    }
  };

  // Automatically hide modal after 3 seconds
  useEffect(() => {
    if (showModal || loading) {
      const timer = setTimeout(() => {
        setShowModal(false);
        setLoading(false);
      }, 3000);  // Auto-close modal after 3 seconds

      return () => clearTimeout(timer);  // Cleanup the timer if the modal is manually closed
    }
  }, [showModal, loading]);

  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center'>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 200,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        exit={{
          opacity: 0,
          translateY: 200,
        }}
        className={`bg-black text-white rounded-3xl px-5 py-3 font-serif flex flex-col gap-3`}
      >
        <h1 className='text-center text-3xl mb-1'>Sign up</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="input-container">
            <h3>Your username</h3>
            <input type="text" id="username" onChange={handleChange} className='outline-none bg-white rounded-full h-12 w-72 px-3 text-black' />
          </div>
          <div className="input-container">
            <h3>Your email</h3>
            <input type="email" id="email" onChange={handleChange} className='outline-none bg-white rounded-full h-12 w-72 px-3 text-black' />
          </div>
          <div className="input-container">
            <h3>Your password</h3>
            <input type="password" id="password" onChange={handleChange} className='outline-none rounded-full h-12 w-72 px-3 text-black'/>
          </div>
          <button type="submit" disabled={loading} className='outline-none rounded h-9 w-[100%] bg-teal-500 cursor-pointer'>
            {loading ? (
              <>
                <div style={spinnerStyle}></div>
                <span>Loading...</span>
              </>
            ) : (
              'Sign up'
            )}
          </button>
        </form>
        <OAuth />
        <div className="sign-in">
          Have an account?
          <Link to="/signin">
            <span> Sign in</span>
          </Link>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-container"
            >
              <motion.div
                initial={{ translateY: -400, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: -400, opacity: 0 }}
                className="modal-box"
              >
                <FaTimes
                  className="close-modal"
                  onClick={() => setShowModal(false)}
                />
                <p className="modal-text">{errorMessage}</p>
                <motion.div className="actions">
                  <button type="button" onClick={() => setShowModal(false)}>OK</button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SignUp;
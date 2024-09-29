import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css'; // Corrected path

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-Up:', { name, email, password });
  };

  const handleSignInRedirect = () => {
    navigate('/');
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up for YashTech SkillBridge</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <span onClick={handleSignInRedirect} style={{ color: 'blue', cursor: 'pointer' }}>
          Sign In
        </span>
      </p>
    </div>
  );
}

export default SignUp;

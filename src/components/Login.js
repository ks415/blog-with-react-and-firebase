import React from 'react'
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }
  return (
    <div className="loginPage">
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>
        Googleでログイン
      </button>
    </div>
  )
}

export default Login

import React from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    //Googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    })
  }
  return (
    <div className="logoutPage">
      <p>ログアウトする</p>
      <button onClick={logout}>
        Googleでログアウト
      </button>
    </div>
  )
}

export default Logout
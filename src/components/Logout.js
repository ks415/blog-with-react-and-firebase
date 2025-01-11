import React from 'react'
import { auth, provider } from '../firebase';
import { signInWithPopup,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    //Googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>Googleでログアウト</button>
    </div>
  )
}

export default Logout
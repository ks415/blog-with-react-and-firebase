import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuth }) => {
  return (
    <nav>
        <div className="nav-left">
          <h1>簡易掲示板</h1>
        </div>
        <div className="nav-right">
          <Link to="/"><FontAwesomeIcon icon={faHouse} />
          ホーム
          </Link>
          {!isAuth ? (
            <Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
            </Link>
          ) : (
            <>
              <Link to="/createpost"><FontAwesomeIcon icon={faFilePen} />
              記事投稿
              </Link>
              <Link to="/logout"><FontAwesomeIcon icon={faArrowRightToBracket} />
              ログアウト
              </Link>
            </>
          )}
        </div>
    </nav>
  )
}

export default Navbar
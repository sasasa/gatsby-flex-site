import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faGooglePlus,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ location, title, children, className }) => {
  return (
<div className={className}>
    <header>
    <div className="container">
      <div className="container-small">
        <Link to="/" className="headA">LOGGER</Link>
    
        <button type="button" className="headC" aria-label="メニュー切り替え">
          <FontAwesomeIcon icon={faBars} />
          <span className="sr-only">メニュー切り替え</span>
        </button>
      </div>
    
      <nav className="headB">
        <ul>
          <li><Link to="/">トップ</Link></li>
          <li><Link to="/contents">コンテンツ</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>
    </div>
    </header>

    {children}
    
    <footer>
    <div className="container">
    
      <div className="footA">
        <h2>LOGGER</h2>
        <p>
        〒000-0000 東京都中央区杉並3-3-3-403<br/>
        <Link to="/">http://logger.nett/</Link>
        </p>
    
        <nav className="footD">
          <ul>
            <li><Link to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link></li>
    
            <li><Link to="/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link></li>
    
            <li><Link to="/">
              <FontAwesomeIcon icon={faGooglePlus} />
            </Link></li>
    
            <li><Link to="/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link></li>
    
            <li><Link to="/">
              <FontAwesomeIcon icon={faYoutube} />
            </Link></li>
          </ul>
        </nav>
      </div>
    
      <nav className="footB">
        <div>
          <h3>ABOUT</h3>
          <ul>
            <li><Link to="/">設立</Link></li>
            <li><Link to="/">所在地</Link></li>
            <li><Link to="/">地図</Link></li>
            <li><Link to="/">スタッフ</Link></li>
          </ul>
        </div>
    
        <div>
          <h3>SUPPORT</h3>
          <ul>
            <li><Link to="/">ダウンロード</Link></li>
            <li><Link to="/">マニュアル</Link></li>
            <li><Link to="/">よくある質問</Link></li>
            <li><Link to="/">お問い合わせ</Link></li>
          </ul>
        </div>
    
        <div>
          <h3>CONTENTS</h3>
          <ul>
            <li><Link to="/">お知らせ</Link></li>
            <li><Link to="/">ビジネス</Link></li>
            <li><Link to="/">プロフィール</Link></li>
            <li><Link to="/">開発者</Link></li>
            <li><Link to="/">ブログ</Link></li>
          </ul>
        </div>
      </nav>
    
      <div className="footC">
        © LOGGER corp. All rights reserved.
      </div>
    
    </div>
    </footer>
</div>
  )
}

export default Layout

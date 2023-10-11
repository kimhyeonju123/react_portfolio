import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <section id="header">
            <div className="inner">
                <h1>
                    <Link to='/'>MUSNSORI</Link>
                    {/* <a href="index.html">MUSNSORI</a> */}
                </h1>
                <nav className="menu">
                    <ul id="gnb">
                        <li><Link to='/BernardWerber'>BernardWerber</Link></li>
                        <li><Link to='/KimChoyeop'>KimChoyeop</Link></li>
                        <li><Link to='/JulianBarnes'>JulianBarnes</Link></li>
                        <li><Link to='/About'>About</Link></li>
                    </ul>
                </nav>
                <nav className="menuOn">
                    <h1>
                        <a href="index.html">MUSNSORI</a>
                    </h1>
                    <ul id="gnbOn">
                        <li><Link to='/BernardWerber'>BernardWerber</Link></li>
                        <li><Link to='/KimChoyeop'>KimChoyeop</Link></li>
                        <li><Link to='/JulianBarnes'>JulianBarnes</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <Link to='/'>홈으로</Link>
                    </ul>
                </nav>
                <a href="#" title="위로">
                    <FontAwesomeIcon icon={faArrowUp} className='upi'/>
                </a>
                <div className="hBtn ham_btn">
                    <FontAwesomeIcon icon={faBars} className='hamBtni'/>
                </div>
                <div className="hBtn x_btn">
                    <FontAwesomeIcon icon={faXmark} className='xBtni'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header 
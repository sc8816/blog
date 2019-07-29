import React, {useEffect} from 'react'
// @ts-ignore
import styles from './header.module.scss'
import './header.scss'

const Logo = <div className="center">
    <img src={require('../../../imgs/logo.png')} className={styles.headerLogo}/>
    <span className={styles.logoSpan}>SC8816</span>
</div>

// const Footer = <Icon type="search"><WaterWave press="down" color="#fff" effect="helix" duration={800}/></Icon>

const show = () => {
    // @ts-ignore
    M.Sidenav.getInstance(document.querySelectorAll('#mobile-demo'));
}
export default function Header(top: number) {
    useEffect(() => {
        let elems = document.querySelectorAll('#mobile-demo');
        // @ts-ignore
        M.Sidenav.init(elems, {});
    })
    return (
        <header className={`${styles.header} navbar-fixed`}>
            <nav className={`${styles.navTransparent} ${top >= 120 ? styles.bgColor : ''}`}>
                <div className="nav-wrapper container">
                    <a href="#!" className="brand-logo">
                        {Logo}
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons" onClick={show}>menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li className="waves-effect"><a>Home</a></li>
                        <li className="waves-effect"><a>document</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </header>
    );
}

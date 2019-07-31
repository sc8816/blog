import React, {useEffect} from 'react'
// @ts-ignore
import styles from './header.module.scss'
import {MenuConfig} from "../../../menuConfig";
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
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger button-collapse"><i
                        className="fa fa-navicon" onClick={show}/></a>
                    <ul className="right">
                        {MenuConfig.map((item, index) => {
                            return (
                                <li className="hide-on-med-and-down waves-effect waves-light" key={index}><a>
                                    <i className={`fa ${item.icon}`} style={{paddingRight: '3px'}}/>{item.title}</a>
                                </li>
                            )
                        })}
                        <li><a className="waves-effect waves-light">
                            <i className="search fa fa-search" title="search"/>
                        </a></li>
                    </ul>
                </div>
            </nav>
            <div id="mobile-demo" className="sidenav side-nav">
                <div className="mobile-head bg-color center-align">
                    <img src={require('@/assets/imgs/logo.png')} className="logo-img circle responsive-img"/>
                    <div className="logo-name white-text">SC8816</div>
                </div>

                <ul className="menu-list mobile-menu-list">
                    {MenuConfig.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className="waves-effect waves-light">
                                    <i className={`fa ${item.icon}`} style={{paddingRight: '3px'}}/>{item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    );
}

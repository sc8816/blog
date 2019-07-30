import React, {useEffect, useState} from 'react';
import Header from '../components/Header/header'
// import ReactDOM from 'react-dom';
import BgShow from '../components/BgShow/bgshow'
import Footer from '../../components/Footer/footer'


export default function BasicLayout({children}) {
    let [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        let handScroll = () => {
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }
            setScrollTop(scrollTop)
        }
        document.addEventListener('scroll', handScroll)
        return () => {
            document.removeEventListener('scroll', handScroll)
        }
    })
    return (
        <div className="main-container">
            {Header(scrollTop)}
            {BgShow()}
            <div className="content">
                {children}
            </div>
            {Footer()}
        </div>
    );
}

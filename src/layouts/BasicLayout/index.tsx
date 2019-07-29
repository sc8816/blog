import React, {useEffect, useState} from 'react';
import Header from '../components/Header/header'
// import ReactDOM from 'react-dom';
import BgShow from '../components/BgShow/bgshow'


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
            <div className="footer"
                 style={{
                     textAlign: 'center',
                     lineHeight: '36px'
                 }}
            >
                <p>
                    © 2017-2018 xxxx团队 版权所有 系统维护者：@xx 如有问题随时联系！
                    <br/>
                    由
                    {' '}
                    <a href="//ice.alibaba-inc.com" target="_blank">ICE</a>
                    {' '}
                    提供技术支持
                </p>
            </div>
        </div>
    );
}

import React, {useEffect, useState} from 'react';
import Header from '../components/Header/header'
import '../components/BgShow/bgshow.scss'
import '../components/BgPic/bgpic.scss'
import {Carousel} from 'react-materialize'
import Footer from '../components/Footer/footer'
import useReactRouter from 'use-react-router';

const images = [
    'src/assets/imgs/banner/0.jpg',
    'src/assets/imgs/banner/1.jpg',
    'src/assets/imgs/banner/2.jpg',
    'src/assets/imgs/banner/3.jpg']
const backgroundImage = 'src/assets/imgs/banner/4.jpg'
export default function BasicLayout({children}) {
    let [scrollTop, setScrollTop] = useState(0);
    const {location} = useReactRouter();
    let instant
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
    useEffect(() => {
        let elems = document.querySelectorAll('#mobile-demo');
        if (document.querySelectorAll('.index-cover')[0]) {
            instant = M.Carousel.getInstance(document.querySelectorAll('.index-cover')[0]);
        }
        M.Sidenav.init(elems, {});
    })
    return (
        <div className="main-container">
            {Header(scrollTop)}
            {(location.pathname === '/dashboard' || location.pathname === '/') ?
                <Carousel options={{
                    fullWidth: true, indicators: true,
                }}
                          fixedItem={<div>
                              <div id="prev-cover"
                                   className="left waves-effect carousel-control"
                                   onClick={() => instant.prev()}>
                                  <i className="icon fa fa-angle-left"/>
                              </div>
                              < div id="next-cover"
                                    className="right waves-effect carousel-control"
                                    onClick={() => instant.next()}>
                                  <i className="icon fa fa-angle-right"/>
                              </div>
                          </div>}
                          className="white-text center index-cover"
                          id="banner-show">
                    {images.map((item, index) => {
                        return (
                            <div className="red white-text bg-cover" key={`item${index}`}
                                 style={{backgroundImage: 'url(' + item + ')'}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col s10 offset-s1">
                                            <div className="title center-align">一个极简的 Java ASCII 表格生成库</div>
                                            <div className="description center-align">
                                                一个轻量级、零依赖的 Java ASCII 表格生成库。
                                                特性
                                                轻量级、无依赖（jar包仅9kb）
                                                API简单易用
                                                易于集成或定制修改，仅一个Java文件，且代码规范

                                                集成使用Maven集成&lt;dependency&gt;
                                                &amp;l

                                            </div>
                                            <div className="cover-btns">
                                                <a className="waves-effect waves-light btn" target="_blank">
                                                    <i className="icon fa fa-eye fa-fw"/>阅读更多
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel> : <div className="bg-pic bg-cover pd-header about-cover"
                                   style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                                <div className="brand">
                                    <div className="title center-align">
                                        闪烁之狐
                                    </div>
                                    <div className="description center-align">
                                        从来没有真正的绝境，只有心灵的迷途
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            <div className="content">
                {children}
            </div>
            {Footer()}
        </div>
    );
}

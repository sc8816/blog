import React, {useEffect} from 'react'
import './bgshow.scss'
import {Carousel} from 'react-materialize'

const images = [
    'src/assets/imgs/banner/0.jpg',
    'src/assets/imgs/banner/1.jpg',
    'src/assets/imgs/banner/2.jpg',
    'src/assets/imgs/banner/3.jpg']
export default function BgShow() {
    let instant
    useEffect(() => {
        // @ts-ignore
        instant = M.Carousel.getInstance(document.querySelectorAll('.index-cover')[0]);
    })
    return (
        <Carousel options={{
            fullWidth: true, indicators: true,
        }}
                  fixedItem={<div>
                      <div id="prev-cover" className="left waves-effect carousel-control"
                           onClick={() => instant.prev()}>
                          <i className="icon fa fa-angle-left"></i>
                      </div>
                      < div id="next-cover" className="right waves-effect carousel-control"
                            onClick={() => instant.next()}>
                          <i className="icon fa fa-angle-right"></i>
                      </div>
                  </div>} className="white-text center index-cover">
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

            {/*<div className="amber white-text bg-cover">*/}
            {/*    <div className="container">*/}
            {/*        <h2>*/}
            {/*            Second Panel*/}
            {/*        </h2>*/}
            {/*        <p>*/}
            {/*            This is your second panel*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="amber white-text bg-cover">*/}
            {/*    <div className="container">*/}
            {/*        <h2>*/}
            {/*            Third Panel*/}
            {/*        </h2>*/}
            {/*        <p>*/}
            {/*            This is your third panel*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="amber white-text bg-cover">*/}
            {/*    <div className="container">*/}
            {/*        <h2>*/}
            {/*            Fourth Panel*/}
            {/*        </h2>*/}
            {/*        <p>*/}
            {/*            This is your fourth panel*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Carousel>
    )
}

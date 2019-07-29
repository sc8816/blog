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
                            <h2>
                                First Panel{item}
                            </h2>
                            <p>
                                This is your first panel
                            </p>
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

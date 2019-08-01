import React from 'react'
import './bgpic.scss'

export default function BgPic() {
    const backgroundImage = 'src/assets/imgs/banner/4.jpg'
    console.log(backgroundImage);
    return (
        <div className="bg-pic bg-cover pd-header about-cover"
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
        </div>
    )
}

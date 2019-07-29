import React from 'react';

import './dashboard.scss'
import {Card} from 'react-materialize'

export default function Dashboard() {
    return (
        <div className="indexCard">
            <div className="container">
                <Card
                    className="white"
                >
                    <div className="my-dream">
                        <div className="title center-align">
                            <i className="fa fa-lightbulb-o"></i>&nbsp;&nbsp;我的梦想
                        </div>
                        <div className="row">
                            <div className="col l8 offset-l2 m10 offset-m1 s10 offset-s1 center-align text">
                                不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，
                                设计自己的梦想，追求自己的梦想，实现自己的梦想。梦想是生命的灵魂，是心灵的灯塔，
                                是引导人走向成功的信仰。有了崇高的梦想，只要矢志不渝地追求，梦想就会成为现实，
                                奋斗就会变成壮举，生命就会创造奇迹。——罗伯·舒乐
                            </div>
                        </div>
                    </div>
                    <div id="recommend-sections" className="recommend">
                        <div className="title"><i className="fa fa-thumbs-o-up"></i>&nbsp;&nbsp;推荐文章</div>
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="post-card"
                                     style={{backgroundImage: "url('http://static.blinkfox.com/20181124-design.jpg')"}}>
                                    <div className="post-body">
                                        <div className="post-categories">
                                            <a href="/" className="category" target="_blank">软件设计</a>
                                        </div>
                                        <a href="/"
                                           target="_blank">
                                            <h3 className="post-title">软件程序设计原则</h3>
                                        </a>
                                        <p className="post-description">

                                            一、前言软件也像人一样，具有生命力，从出生到死亡，会经历多种变化。软件架构设计也不是一蹴而就的，是不断地演进发展。每个程序员都可以从理解编程

                                        </p>
                                        <a href="/"
                                           target="_blank" className="read-more btn waves-effect waves-light"
                                           style={{background: 'linear-gradient(to right, #FF5E3A 0%, #FF2A68 100%)'}}>
                                            <i className="icon fa fa-eye fa-fw"></i>阅读更多
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div className="post-card"
                                     style={{backgroundImage: "url('http://static.blinkfox.com/20181124-design.jpg')"}}>
                                    <div className="post-body">
                                        <div className="post-categories">
                                            <a href="/" className="category" target="_blank">软件设计</a>
                                        </div>
                                        <a href="/"
                                           target="_blank">
                                            <h3 className="post-title">软件程序设计原则</h3>
                                        </a>
                                        <p className="post-description">

                                            一、前言软件也像人一样，具有生命力，从出生到死亡，会经历多种变化。软件架构设计也不是一蹴而就的，是不断地演进发展。每个程序员都可以从理解编程

                                        </p>
                                        <a href="/"
                                           target="_blank" className="read-more btn waves-effect waves-light"
                                           style={{background: 'linear-gradient(to right, #EF4DB6 0%, #C643FC 100%)'}}>
                                            <i className="icon fa fa-eye fa-fw"></i>阅读更多
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div className="post-card"
                                     style={{backgroundImage: "url('http://static.blinkfox.com/20181124-design.jpg')"}}>
                                    <div className="post-body">
                                        <div className="post-categories">
                                            <a href="/" className="category" target="_blank">软件设计</a>
                                        </div>
                                        <a href="/"
                                           target="_blank">
                                            <h3 className="post-title">软件程序设计原则</h3>
                                        </a>
                                        <p className="post-description">

                                            一、前言软件也像人一样，具有生命力，从出生到死亡，会经历多种变化。软件架构设计也不是一蹴而就的，是不断地演进发展。每个程序员都可以从理解编程

                                        </p>
                                        <a href="/"
                                           target="_blank" className="read-more btn waves-effect waves-light"
                                           style={{background: 'linear-gradient(to right, #1AD6FD 0%, #1D62F0 100%)'}}>
                                            <i className="icon fa fa-eye fa-fw"></i>阅读更多
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div className="post-card"
                                     style={{backgroundImage: "url('http://static.blinkfox.com/20181124-design.jpg')"}}>
                                    <div className="post-body">
                                        <div className="post-categories">
                                            <a href="/" className="category" target="_blank">软件设计</a>
                                        </div>
                                        <a href="/"
                                           target="_blank">
                                            <h3 className="post-title">软件程序设计原则</h3>
                                        </a>
                                        <p className="post-description">

                                            一、前言软件也像人一样，具有生命力，从出生到死亡，会经历多种变化。软件架构设计也不是一蹴而就的，是不断地演进发展。每个程序员都可以从理解编程

                                        </p>
                                        <a href="/"
                                           target="_blank" className="read-more btn waves-effect waves-light"
                                           style={{background: 'linear-gradient(to right, #FFCC00 0%, #FF9500 100%)'}}>
                                            <i className="icon fa fa-eye fa-fw"></i>阅读更多
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

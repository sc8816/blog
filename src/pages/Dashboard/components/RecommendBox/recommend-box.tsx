import React from "react";

export default function RecommendBox(props?: number) {
    return (
        <div className="recommend-box col s12 m6" key={props}>
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
    )
}


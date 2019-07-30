import React from "react";
import {Card, Col} from 'react-materialize';
import './article-box.scss'

export default function ArticleBox({height, key}) {
    const CardTitle = <div className="card-image">
        <img src="http://static.blinkfox.com/20190302.png" className="responsive-img" alt="SpringBoot2.x 单元测试"/>
        <span className="card-title">SpringBoot2.x 单元测试</span>
    </div>
    const actions = ['后台', '数据库', 'Spring', 'SpringBoot'].map((item, index) => {
        return (
            <a target="_blank">
                <span className="chip bgColor">{item}</span></a>
        )
    })
    return (
        <Col m={6} s={12} l={4} className="article" data-aos="zoom-in" key={key}>
            <Card header={CardTitle} actions={actions}>
                <div className="summary" style={{height: height + 'px'}}>
                    一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                    我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                </div>
                <div className="publish-info">
                            <span className="publish-date">
                                <i className="fa fa-clock-o fa-fw icon-date"></i>2019-03-02
                            </span>
                    <span className="publish-type">
                                <i className="fa fa-bookmark fa-fw icon-category"></i>
                                <a href="/categories/后端/" className="post-category" target="_blank">
                                    后端
                                </a>
                            </span>
                </div>
            </Card>
        </Col>
    )
}


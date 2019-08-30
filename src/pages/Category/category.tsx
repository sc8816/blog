import React, {useEffect} from 'react'
import './category.scss'
import echarts from 'echarts/lib/echarts';
import'echarts/lib/chart/radar';
import'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import {Route} from "react-router-dom";
import {Card} from 'react-materialize'
import useReactRouter from 'use-react-router';

const showTags = (num: number) => {
    let res: any = []
    for (let i = 0; i < num; i++) {
        res.push(
            <a href="/tags/Hexo/" title="Hexo: 2" key={i}>
                    <span className="chip center-align waves-effect waves-light chip-default " data-tagname="Hexo"
                          style={{backgroundColor: '#F9EBEA'}}>Hexo
                        <span className="tag-length">2</span>
                    </span>
            </a>
        )
    }
    return res
}
const option = {
    title: {
        text: '文章分类雷达图',
        x: 'center',
        textStyle: {
            //文字颜色
            color: '#3C4858',
            //字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 400,
            //字体系列
            fontFamily: 'sans-serif',
            //字体大小
            fontSize: 24
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center'
    },
    radar: [
        {
            indicator: [
                {text: '前端', max: 16},
                {text: '后端', max: 16},
                {text: '数据库', max: 16},
                {text: '设计', max: 16},
                {text: 'Java', max: 16},
                {text: 'C#', max: 16},
                {text: 'go', max: 16}
            ],
            center: ['50%', '56%'],
            radius: 100
        }
    ],
    series: [
        {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [1,2,3,4,5,6,7],
                }
            ]
        },
    ]
};

export default function Category() {
    const {match} = useReactRouter();
    useEffect(() => {
        let myChart = echarts.init(document.getElementById('echarts'));
        myChart.setOption(option);

    })
    return (
        <div className="tags container chip-container">
            <Card
                className="white"
            >
                <div className="tag-title center-align">
                    <i className="fa fa-bookmark"/>&nbsp;&nbsp;文章分类
                </div>
                <div className="tags-chip">
                    {
                        ...showTags(23)
                    }
                </div>
            </Card>
            <Card>
                <div id="echarts" style={{width: '100%', height: '312px'}}></div>
            </Card>
            <Route path={`${match.path}/:topicId`}/>
        </div>
    )
}

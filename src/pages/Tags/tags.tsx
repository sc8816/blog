import React from 'react'
import ArticleList from './components/ArticleList/articleList'
import './tags.scss'
import {Route} from "react-router-dom";
import {Card} from 'react-materialize'
// import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import useReactRouter from 'use-react-router';

const data = [
    {text: 'Hey', value: 1000},
    {text: 'lol', value: 200},
    {text: 'first', value: 800},
    {text: 'very cool', value: 1000},
    {text: 'duck', value: 10},
];
const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

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
export default function Tags() {
    const {match} = useReactRouter();
    return (
        <div className="tags container chip-container">
            <Card
                className="white"
            >
                <div className="tag-title center-align">
                    <i className="fa fa-tags"></i>&nbsp;&nbsp;文章标签
                </div>
                <div className="tags-chip">
                    {
                        ...showTags(23)
                    }
                </div>
            </Card>
            <Card className="white center-align">
                <WordCloud
                    height={300}
                    data={data}
                    fontSizeMapper={fontSizeMapper}
                    rotate={rotate}
                    onWordClick={(val)=>{
                        alert(val)
                    }}
                />
            </Card>
            <Route path={`${match.path}/:topicId`} component={ArticleList}/>
        </div>
    )
}

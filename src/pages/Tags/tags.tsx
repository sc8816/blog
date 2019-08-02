import React from 'react'
import ArticleList from './components/ArticleList/articleList'
import {Route} from "react-router-dom";
import useReactRouter from 'use-react-router';

export default function Tags() {
    const {match} = useReactRouter();
    return (
        <div className="tags">
            <Route path={`${match.path}/:topicId`} component={ArticleList}/>
        </div>
    )
}

import React, {useEffect} from 'react';
import './dashboard.scss'
import RecommendBox from './components/RecommendBox/recommend-box'
import ArticleBox from './components/ArticleBox/article-box'
import {Card} from 'react-materialize'
import Masonry from 'react-masonry-component';
import Pagination from '../../components/Pagination/pagination'

const masonryOptions = {
    transitionDuration: 1000
};
const imagesLoadedOptions = {background: '.my-bg-image-el'}
export default function Dashboard() {
    useEffect(() => {
        let elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {});
    })
    return (
        <div className="dashboard">
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
                                {RecommendBox(1)}
                                {RecommendBox(3)}
                                {RecommendBox(4)}
                                {RecommendBox(5)}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="articles container">
                <div className="row article-row">
                    <Masonry
                        className={'my-gallery-class'} // default ''
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={imagesLoadedOptions} // default {}
                    >
                        {ArticleBox({height: 100, key: 11})}
                        {ArticleBox({height: 130, key: 22})}
                        {ArticleBox({height: 150, key: 33})}
                        {ArticleBox({height: 100, key: 44})}
                        {ArticleBox({height: 120, key: 55})}
                        {ArticleBox({height: 130, key: 66})}
                        {ArticleBox({height: 110, key: 77})}
                        {ArticleBox({height: 130, key: 88})}
                        {ArticleBox({height: 130, key: 99})}
                        {ArticleBox({height: 130, key: 111})}
                        {ArticleBox({height: 110, key: 122})}
                        {ArticleBox({height: 120, key: 133})}
                    </Masonry>
                </div>
            </div>
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large fa fa-pencil"></i>
                </a>
                <ul>
                    <li><a className="red btn-floating"><i className="fa fa-arrow-up"></i></a></li>
                    <li><a className="btn-floating yellow darken-1"><i className="fa fa-thumbs-o-up"></i></a>
                    </li>
                    <li><a className="btn-floating green"><i className="fa fa-github"></i></a></li>
                    <li><a className="btn-floating blue"><i className="fa fa-paperclip"></i></a></li>
                </ul>
            </div>

            {Pagination()}
        </div>
    );
}

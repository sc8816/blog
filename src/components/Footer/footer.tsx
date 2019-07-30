import React from 'react'
import './footer.scss'


export default function BaseFooter() {
    return (
        <footer className="page-footer bg-color">
            <div className="container row center-align">
                <div className="col s12 m8 l8 copy-right">
                    本站由©<a href="https://blinkfox.github.io/" target="_blank">sc8816</a>基于
                    <a href="https://hexo.io/" target="_blank">Hexo</a> 的
                    <a href="https://github.com/blinkfox/hexo-theme-matery" target="_blank">hexo-theme-matery</a>主题搭建.
                    &nbsp;<i className="fa fa-area-chart"></i>&nbsp;站点总字数:&nbsp;
                    <span className="white-color">192.6k</span>
                    <br/>
                    <span id="busuanzi_container_site_pv" style={{display: 'inline'}}>
                    <i className="fa fa-heart-o"/>
                    本站总访问量 <span id="busuanzi_value_site_pv" className="white-color">72896</span>
                </span>
                    <span id="busuanzi_container_site_uv" style={{display: 'inline'}}>
                    <i className="fa fa-users"/>
                    次,&nbsp;访客数 <span id="busuanzi_value_site_uv" className="white-color">13079</span> 人.
                </span>
                </div>
                <div className="col s12 m4 l4 social-link social-statis">
                    <a href="https://github.com/blinkfox/" className="tooltipped" target="_blank"
                       data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
                        <i className="fa fa-github"></i>
                    </a>


                    <a href="mailto:chenjiayin1990@163.com" className="tooltipped" target="_blank" data-tooltip="邮件联系我"
                       data-position="top" data-delay="50">
                        <i className="fa fa-envelope-open"></i>
                    </a>


                    <a href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=1181062873"
                       className="tooltipped" data-tooltip="QQ联系我: 1181062873" data-position="top" data-delay="50">
                        <i className="fa fa-qq"></i>
                    </a>
                    <a href="/atom.xml" className="tooltipped" target="_blank" data-tooltip="RSS 订阅" data-position="top"
                       data-delay="50">
                        <i className="fa fa-rss"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

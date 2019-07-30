import React from 'react';
import './pagination.scss'

export default function Pagination() {
    return (
        <div className="container paging">
            <div className="row">
                <div className="col s6 m4 l4">
                    <a className="left btn-floating btn-large disabled">
                        <i className="fa fa-angle-left"/>
                    </a>

                </div>
                <div className="page-info col m4 l4 hide-on-small-only">
                    <div className="center-align b-text-gray">1 / 5</div>
                </div>
                <div className="col s6 m4 l4">
                    <a href="/" className="right btn-floating btn-large waves-effect waves-light bg-color">
                        <i className="fa fa-angle-right"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

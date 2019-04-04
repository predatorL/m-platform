import React from 'react';

export default class View extends React.Component {
    render() {
        return (
            <div id="page-content" className="home">
                <div className="item">
                    日常任务
                </div>
                <div className="item">
                    历史记录
                </div>
            </div>
        )
    }
}

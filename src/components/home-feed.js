import React, { Component } from 'react';

const scrollToTop = () => {
    window.scrollTo(0,0);
}

class HomeFeed extends Component {
    render() {
        return(
            <button onClick={scrollToTop} type="button" className="home_feed_bg">
                <p className="home_feed_cat">{this.props.category}</p>
                <p className="home_feed_title">{this.props.title}</p>
                <img alt="" className="home_feed_thumb" src={this.props.thumb} />
                <pre className="home_feed_content">{`${this.props.content}`}</pre>
                <div className="home_feed_emote">
                    <svg className="home_feed_like" width="32.698" height="30" viewBox="0 0 32.698 30"><path d="M18.349,33l-2.371-2.158C7.559,23.207,2,18.172,2,11.992A8.9,8.9,0,0,1,10.992,3a9.79,9.79,0,0,1,7.357,3.417A9.79,9.79,0,0,1,25.706,3,8.9,8.9,0,0,1,34.7,11.992c0,6.18-5.559,11.215-13.978,18.866Z" transform="translate(-2 -3)"/></svg>
                    <p className="home_feed_like_a">{this.props.like}</p>
                    <svg className="home_feed_share" width="36" height="30" viewBox="0 0 36 30"><path d="M25,13V5L39,19,25,33V24.8C15,24.8,8,28,3,35,5,25,11,15,25,13Z" transform="translate(-3 -5)" /></svg>
                </div>
            </button>
        )
    }
}

export default HomeFeed
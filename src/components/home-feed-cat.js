import React, { Component } from 'react';

class HomeFeedCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            following: false
        }
    }
    follow = () => {
        if (this.state.following === false) {
            this.setState({
                following: true
            })
        } else {
            this.setState({
                following: false
            })
        }
    }
    render() {
        return(
            <button onClick={() => this.follow()} type="button" className={this.state.following ? "home_feed_categories_btn" : "home_feed_categories_btn_u"}>{this.props.category}</button>
        );
    }
}

export default HomeFeedCat
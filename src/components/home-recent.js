import React, { Component } from 'react';

class HomeRecent extends Component {
    render() {
        return(
            <button type="button" className="home_2_bg">
                <div className="home_2_pic" />
                <div className="home_2_area">
                    <p className="home_2_cat">{this.props.category}</p>
                    <p className="home_2_title">{this.props.title}</p>
                    <p className="home_2_content">{this.props.content}</p>
                </div>
            </button>
        );
    }
}

export default HomeRecent